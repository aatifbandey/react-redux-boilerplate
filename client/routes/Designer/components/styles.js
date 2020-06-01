import { css } from 'emotion';

export const container = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 10px;
`;

export const individualGroup = css`
  background: #196fd3;
  width: 96px;
  color: white;
  font-family: sans-serif;
  text-align: center;
  height: 24px;
  align-items: center;
  display: flex;
  justify-content: center;
  border-radius: 8px;
`;

export const groupsContainer = css`
  display: flex;
`;

export const addQuestionButton = css`
  margin: 10px;
  background: #ccc;
  width: 200px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
`;

export const wrapperForQuestionList = css`
  position: relative;
`;

export const questionListContainer = css`
  border-radius: 8px;
  position: absolute;
  top: 50px;
  width: 200px;
  height: 100px;
  background: aquamarine;
  margin: -2px 0 0 10px;
  z-index: 0;
`;
