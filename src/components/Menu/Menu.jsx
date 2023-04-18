import React from 'react';
import './index.css';
export const Menu = ({ onStartGame, firstStart }) => {
  React.useEffect(() => {}, [firstStart]);
  return (
    <div className="menu">
      <div className="menu__modal">
        <h2>{firstStart ? 'Начать?' : 'Попробуй еще раз'}</h2>
        <button onClick={onStartGame}>{firstStart ? 'Старт' : 'Заново'}</button>
      </div>
    </div>
  );
};
