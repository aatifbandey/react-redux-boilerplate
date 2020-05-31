/*
 * loginReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 */
import { LOGIN_REQUEST } from './constants';

// The initial state of the App
export const initialState = {
  isLoggedIn: false,
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoggedIn: true,
      };
    default:
      return state;
  }
};
