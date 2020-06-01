/*
 * loginReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 */
import { ADD_QUESTION } from './constants';

// The initial state of the App
export const initialState = {
  survey: {
    groups: [
      {
        questions: [],
        name: 'Group',
      },
    ],
    name: 'Survey',
  },
};

export const designerReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_QUESTION:
      return {
        ...state,
        survey: {
          name: 'test',
        },
      };
    default:
      return state;
  }
};
