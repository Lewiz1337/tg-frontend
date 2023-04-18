import React from 'react';
import { Card } from '../Card/Card';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './index.css';

export const CardList = (props) => {
  const { list } = props;

  return (
    <TransitionGroup className="list">
      {list.map(({ abb, text, curr, nodeRef }, index) => {
        return (
          <CSSTransition key={index} nodeRef={nodeRef} timeout={100} classNames="item">
            <div ref={nodeRef} key={index} className="card__wrapper">
              <Card abb={abb} text={text} curr={curr} {...props} />
            </div>
          </CSSTransition>
        );
      })}
    </TransitionGroup>
  );
};
