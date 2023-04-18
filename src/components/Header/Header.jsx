import React from 'react';
import { ReactComponent as Heart } from '../../media/heart-svgrepo-com.svg';
import './index.css';
export const Header = ({ currCount, hp }) => {
  return (
    <header className="header">
      <div className="hp">
        {[...new Array(hp < 0 ? 0 : hp)].map((_, index) => {
          return <Heart key={index} className="svgHeart" />;
        })}
      </div>
      <div className="score">
        <p>Score: {currCount}</p>
      </div>
    </header>
  );
};
