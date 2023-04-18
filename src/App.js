import './App.css';
import React from 'react';
import { CardList } from './components/CardList/CardList';
import { Header } from './components/Header/Header';
import { Menu } from './components/Menu/Menu';

const LIST = [
  {
    abb: 'СВЧ',
    text: 'это электромагнитное излучение, включающее в себя дециметровый, сантиметровый и миллиметровый диапазоны радиоволн, частоты микроволнового излучения изменяются от 300 МГц до 300 ГГц (длина волны от 1 м до 1 мм).',
    curr: false,
    nodeRef: React.createRef(null),
  },
  { abb: 'СВЧ', text: '2', curr: false, nodeRef: React.createRef(null) },
  { abb: 'СВЧ', text: '3', curr: false, nodeRef: React.createRef(null) },
  { abb: 'СВЧ', text: '4', curr: false, nodeRef: React.createRef(null) },
  {
    abb: 'Полиграфия',
    text: 'это отрасль техники, совокупность технических средств для множественного репродуцирования текстового материала и графических изображений.',
    curr: false,
    nodeRef: React.createRef(null),
  },
];
function App() {
  const [hp, setHp] = React.useState(3);
  const [currCount, setCurrCount] = React.useState(0);
  const [isMenuOpen, setIsMenuOpen] = React.useState(true);
  const [list, setList] = React.useState([]);
  const [firstStart, setFirstStart] = React.useState(true);
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
    setList([...LIST]);
    console.log(LIST);
    console.log(firstStart);
    console.log(list);
  };

  const onAnsw = (success) => {
    if (list.length === 1) {
      console.log('GAME OVER');
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
    console.log(list);
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
