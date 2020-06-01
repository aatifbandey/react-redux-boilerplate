import React from 'react';
import { string } from 'prop-types';

import Loadable from 'react-loadable';
import { questionWrapper } from './styles';

const RatingQuestion = Loadable({
  loader: () => import(/* webpackChunkName: "ratingQuestion" */ './RatingQuestion').catch(
    '',
  ),
  loading: () => '', // full page loader here
  delay: 0, // delay in milliseconds, useful for suspense
});

const QuestionContainer = (props) => {
  const { title, type } = props;

  console.log('Hello', props);
  const renderTypeOfQuestion = () => {
    if (type === 'rating') {
      return <RatingQuestion {...props} />;
    }
    return <div> Question </div>;
  };
  return (
    <div className={questionWrapper}>
      <div>
        {title}
        {' '}
      </div>

      {renderTypeOfQuestion()}
    </div>
  );
};

QuestionContainer.propTypes = {
  title: string.isRequired,
  type: string.isRequired,
};
export default QuestionContainer;
