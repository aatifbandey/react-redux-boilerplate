import React from 'react';
import { render } from 'react-dom';
import Loadable from 'react-loadable';
import { createBrowserHistory } from 'history';
// imported as babel 7 gives an error of rungenerator in saga
import 'core-js/stable';
import 'regenerator-runtime/runtime';
//
import App from './App';

const history = createBrowserHistory();

Loadable.preloadReady().then(() => {
  const container = document.getElementById('root');
  const bootstrap = render;
  const props = {
    history,
  };

  bootstrap(<App {...props} />, container);
});
