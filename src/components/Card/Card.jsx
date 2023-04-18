import React from 'react';
import './index.css';
import { useSwipeable } from 'react-swipeable';
import { ReactComponent as Left } from '../../media/Delete-80_icon-icons.com_57340.svg';
import { ReactComponent as Right } from '../../media/Tick_Mark_icon-icons.com_69146.svg';
export const Card = ({ onAnsw, abb, text, curr }) => {
  const handlers = useSwipeable({
    onSwipedLeft: () => onAnsw(!curr),
    onSwipedRight: () => onAnsw(curr),
  });

  return (
    <div {...handlers} className="card">
      <div className="text__block">
        <p className="card__abb">{abb}</p>
        <p className="card__text">{text}</p>
      </div>
      <div className="intsruction">
        <Left onClick={() => onAnsw(!curr)} className="svg" />
        <Right onClick={() => onAnsw(curr)} className="svg" />
      </div>
    </div>
  );
};
