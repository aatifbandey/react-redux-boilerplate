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
  const { /* dispatch, */ reducerData } = props;
  const { survey } = reducerData;

  const questionMock = questionList();

  const [surveyData, updateSurveyData] = useState(survey);

  const [activeGroup, updateActiveGroup] = useState(0);

  const [questionListFlag, updateQuestionListFlag] = useState(false);

  const showHideQuestionList = () => {
    updateQuestionListFlag(true);
  };

  const addChoice = ({ index }) => {
    const defaultChoice = 'Choice';
    const cloneSurvey = cloneDeep(surveyData);
    cloneSurvey.groups[activeGroup].questions[index].choices.push({
      title: defaultChoice,
    });
    updateSurveyData(cloneSurvey);
  };

  const addQuestion = ({ type }) => {
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

  const editTitle = ({ titleText, index }) => {
    const newSurveyData = cloneDeep(surveyData);
    console.log('props', titleText);
    newSurveyData.groups[activeGroup].questions[index].title = titleText;
    updateSurveyData(newSurveyData);
  };

  const editChoice = ({ choiceText, index, secondIndex }) => {
    const newSurveyData = cloneDeep(surveyData);
    newSurveyData.groups[activeGroup].questions[index].choices[
      secondIndex
    ].title = choiceText;
    updateSurveyData(newSurveyData);
  };

  const renderQuestions = () => surveyData.groups[activeGroup].questions.map((data, index) => (
    <QuestionContainer
      {...data}
      index={index}
      addChoice={addChoice}
      editTitle={editTitle}
      editChoice={editChoice}
    />
  ));

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
