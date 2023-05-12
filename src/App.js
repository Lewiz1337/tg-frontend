import './App.css';
import React from 'react';
import { CardList } from './components/CardList/CardList';
import { Header } from './components/Header/Header';
import { Menu } from './components/Menu/Menu';
import { LIST } from './data/constants';

function App() {
  const [hp, setHp] = React.useState(3);
  const [currCount, setCurrCount] = React.useState(0);
  const [isMenuOpen, setIsMenuOpen] = React.useState(true);
  const [list, setList] = React.useState([]);
  const [firstStart, setFirstStart] = React.useState(true);

  const setQuizList = () => {
    const Random = () => {
      return !!Math.round(Math.random());
    };
    const RandomIndex = () => {
      return Math.floor(Math.random() * LIST.length);
    };
    const randomIndexArr = [];
    const findItem = () => {
      const item = RandomIndex();
      if (randomIndexArr.includes(item)) {
        findItem();
      } else {
        randomIndexArr.push(item);
        return;
      }
    };
    for (let i = 0; i < 5; i++) {
      findItem();
    }
    const listArr = [];
    randomIndexArr.forEach((item) => {
      if (Random()) {
        const { abb, text } = LIST[item];
        listArr.push({ abb, text, curr: true });
      } else {
        while (true) {
          const randomItem = RandomIndex();
          if (randomItem !== item) {
            listArr.push({ abb: LIST[item].abb, text: LIST[randomItem].text, curr: false });
            break;
          }
        }
      }
    });
    setList([...list, ...listArr]);
  };

  const getDamage = () => {
    console.log(hp);
    if (hp === 1) {
      setHp(0);
      setIsMenuOpen(true);
      console.log('GAME OVER');
    } else {
      setHp(hp - 1);
    }
  };

  const onStartGame = () => {
    setCurrCount(0);
    setHp(3);
    setIsMenuOpen(false);
    setFirstStart(false);
    setList([]);
    setQuizList();
  };

  const onAnsw = (success) => {
    if (list.length === 1) {
      setQuizList();
      return;
    }
    if (success) {
      setCurrCount((count) => count + 1);
    } else {
      getDamage();
    }
    const newList = list;
    newList.pop();
    setList(newList);
  };

  return (
    <div className="App">
      <Header hp={hp} currCount={currCount} />
      <CardList onAnsw={onAnsw} list={list} />
      {isMenuOpen && <Menu onStartGame={onStartGame} firstStart={firstStart} />}
    </div>
  );
}

export default App;
