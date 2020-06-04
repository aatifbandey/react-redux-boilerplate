import React, { useState } from 'react';
import { string, number, func } from 'prop-types';
import Loadable from 'react-loadable';
import { questionWrapper, titleQuestion, closeQuestion } from './styles';

const RatingQuestion = Loadable({
  loader: () => import(/* webpackChunkName: "ratingQuestion" */ './RatingQuestion').catch(
    '',
  ),
  loading: () => '', // full page loader here
  delay: 0, // delay in milliseconds, useful for suspense
});

const SelectionQuestion = Loadable({
  loader: () => import(
    /* webpackChunkName: "selectionQuestion" */ './SelectionQuestion'
  ).catch(''),
  loading: () => '', // full page loader here
  delay: 0, // delay in milliseconds, useful for suspense
});

const QuestionContainer = (props) => {
  const {
    title, type, index, editTitle, removeQuestion,
  } = props;
  const [showInputTitle, setInputTitle] = useState(false);
  const renderTypeOfQuestion = () => {
    if (type === 'rating') {
      return <RatingQuestion {...props} />;
    }
    if (type === 'selection') {
      return <SelectionQuestion {...props} />;
    }
    return <div> Question </div>;
  };
  const changeTitle = (e) => {
    if (e.key === 'Enter') {
      if (e.target.value.length !== 0) {
        editTitle({ titleText: e.target.value, index });
      }
      setInputTitle(false);
    }
  };

  return (
    <div className={questionWrapper}>
      <div className={titleQuestion}>
        <div onClick={() => setInputTitle(true)}>
          {!showInputTitle ? (
            `${title}`
          ) : (
            <input
              type="text"
              defaultValue={title}
              onKeyPress={(e) => changeTitle(e)}
            />
          )}
        </div>
        <div className={closeQuestion} onClick={() => removeQuestion(index)}>
          x
        </div>
      </div>
      {renderTypeOfQuestion()}
    </div>
  );
};

QuestionContainer.propTypes = {
  title: string.isRequired,
  type: string.isRequired,
  index: number.isRequired,
  editTitle: func.isRequired,
  removeQuestion: func.isRequired,
};
export default QuestionContainer;
