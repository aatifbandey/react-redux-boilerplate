import React from 'react';
import { shape } from 'prop-types';
import { Provider } from 'react-redux';
import ErrorBoundary from '@components/ErrorBoundary';
import ErrorView from '@components/ErrorView';
import { HelmetProvider } from 'react-helmet-async';

import { BrowserRouter as Router } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import Routes from './routes';

import configureStore from './store';

const initialState = {};

const store = configureStore(initialState);
console.log(process.env.DB_HOST);

const App = ({ history }) => (
  <Provider store={store}>
    <ErrorBoundary render={() => <ErrorView />}>
      <HelmetProvider>
        <Router history={history}>
          <Routes />
        </Router>
      </HelmetProvider>
    </ErrorBoundary>
  </Provider>
);

App.propTypes = {
  history: shape({}).isRequired,
};

export default hot(App);
