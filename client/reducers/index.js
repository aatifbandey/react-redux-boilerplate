/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';

import { routerReducer } from 'react-router-redux';

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    routing: routerReducer,
    ...injectedReducers,
  });
  return rootReducer;
}
