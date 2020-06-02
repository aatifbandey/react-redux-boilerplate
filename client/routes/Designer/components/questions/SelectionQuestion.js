import React, { useState } from 'react';
import { array, func, number } from 'prop-types';
import { selectionNumbers, selectionContainer } from './styles';

const SelectionQuestion = (props) => {
  const {
    choices, index, addChoice, editChoice,
  } = props;
  const [showInputChoice, setInputChoice] = useState(false);
  const [selectedChoice, updateselectedChoice] = useState(0);

  const changeChoice = ({ e, secondIndex }) => {
    if (e.key === 'Enter') {
      if (e.target.value.length !== 0) {
        const choiceText = e.target.value;
        editChoice({ choiceText, index, secondIndex });
      }
      setInputChoice(false);
    }
  };

  const changeInputChoice = (k) => {
    updateselectedChoice(k);
    setInputChoice(true);
  };

  const buildQuestion = () => {
    const selectionHtml = [];
    for (let k = 0; k < choices.length; k += 1) {
      const { title } = choices[k];
      selectionHtml.push(
        <div className={selectionNumbers} onClick={() => changeInputChoice(k)}>
          {selectedChoice === k ? (
            <p>
              {showInputChoice ? (
                <input
                  defaultValue={title}
                  type="text"
                  onKeyPress={(e) => changeChoice({ e, secondIndex: k })}
                  placeholder="Enter your Choice"
                />
              ) : (
                `${title}`
              )}
            </p>
          ) : (
            `${title}`
          )}
        </div>,
      );
    }
    return selectionHtml;
  };

  return (
    <div className={selectionContainer}>
      {buildQuestion()}
      <div className={selectionNumbers} onClick={() => addChoice({ index })}>
        Add More
      </div>
    </div>
  );
};

SelectionQuestion.propTypes = {
  choices: array.isRequired,
  addChoice: func.isRequired,
  index: number.isRequired,
  editChoice: func.isRequired,
};

export default SelectionQuestion;
