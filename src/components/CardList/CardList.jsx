import React from 'react';
import { Card } from '../Card/Card';
import './index.css';

export const CardList = (props) => {
  const { list } = props;

  return (
    <div className="list">
      {list.map(({ abb, text, curr }, index) => {
        return (
          <div key={index} className="card__wrapper">
            <Card abb={abb} text={text} curr={curr} {...props} />
          </div>
        );
      })}
    </div>
  );
};
