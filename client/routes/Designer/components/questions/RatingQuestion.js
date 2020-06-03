import React from 'react';
import { number } from 'prop-types';
import { ratingContainer, ratingNumbers } from './styles';

const RatingQuestion = (props) => {
  const { maxValue, minValue } = props;

  const buildQuestion = () => {
    const ratingHtml = [];
    for (let k = minValue; k <= maxValue; k += 1) {
      ratingHtml.push(<div className={ratingNumbers}>{k}</div>);
    }
    return ratingHtml;
  };
  return <div className={ratingContainer}>{buildQuestion()}</div>;
};

RatingQuestion.propTypes = {
  maxValue: number.isRequired,
  minValue: number.isRequired,
};

export default RatingQuestion;
