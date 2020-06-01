import React, { useState } from 'react';
import { shape } from 'prop-types';
import { cloneDeep } from 'lodash';
import { questionList } from './questionConstant';
import {
  container,
  individualGroup,
  groupsContainer,
  addQuestionButton,
  questionListContainer,
  wrapperForQuestionList,
} from './styles';
import QuestionContainer from './questions';

const SurveyDesigner = (props) => {
  console.log(props);
  const { /* dispatch, */ reducerData } = props;
  const { survey } = reducerData;

  const questionMock = questionList();

  const [surveyData, updateSurveyData] = useState(survey);

  const [activeGroup, updateActiveGroup] = useState(0);

  const [questionListFlag, updateQuestionListFlag] = useState(false);

  const showHideQuestionList = () => {
    updateQuestionListFlag(true);
  };
  const addQuestion = ({ type }) => {
    console.log(questionMock[type]);
    console.log(surveyData);
    const cloneSurvey = cloneDeep(surveyData);
    const questData = questionMock[type];

    cloneSurvey.groups[activeGroup].questions.push(questData);
    updateSurveyData(cloneSurvey);
    updateQuestionListFlag(false);
  };
  const changeActiveGroup = (grpIndex) => {
    updateActiveGroup(grpIndex);
  };
  const renderGroups = () => {
    const groupsHtml = [];
    surveyData.groups.map((d, i) => {
      groupsHtml.push(
        <div className={individualGroup} onClick={() => changeActiveGroup(i)}>
          {d.name}
        </div>,
      );
    });

    return (
      <div className={groupsContainer}>
        {groupsHtml}
        <div> +Add Group </div>
      </div>
    );
  };
  const renderQuestions = () => surveyData.groups[activeGroup].questions.map((data) => <QuestionContainer {...data} />);
  console.log(surveyData);
  return (
    <div className={container}>
      <div>
        {renderGroups()}
        {renderQuestions()}
      </div>
      <div className={wrapperForQuestionList}>
        <div onClick={showHideQuestionList} className={addQuestionButton}>
          Add questions
        </div>
        {questionListFlag ? (
          <div className={questionListContainer}>
            <div onClick={() => addQuestion({ type: 'rating' })}> Rating </div>
            <div onClick={() => addQuestion({ type: 'selection' })}>
              Selection
              {' '}
            </div>
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};
SurveyDesigner.propTypes = {
  reducerData: shape({}).isRequired,
};
export default SurveyDesigner;
