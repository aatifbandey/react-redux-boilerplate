import React from 'react';
import { array, func, number } from 'prop-types';
import { selectionNumbers, selectionContainer } from './styles';

const SelectionQuestion = (props) => {
  const { choices, index, addChoice } = props;

  const buildQuestion = () => {
    const selectionHtml = [];
    for (let k = 0; k < choices.length; k += 1) {
      selectionHtml.push(
        <div className={selectionNumbers}>{choices[k].title}</div>,
      );
    }
    return selectionHtml;
  };
  return (
    <div className={selectionContainer}>
      {buildQuestion()}
      <div className={selectionNumbers} onClick={() => addChoice(index)}>
        Add More
      </div>
    </div>
  );
};

SelectionQuestion.propTypes = {
  choices: array.isRequired,
  addChoice: func.isRequired,
  index: number.isRequired,
};

export default SelectionQuestion;
