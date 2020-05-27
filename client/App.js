import React from "react";
import { object } from "prop-types";
import { Provider } from 'react-redux';
import ErrorBoundary from '@components/ErrorBoundary';
import ErrorView from '@components/ErrorView';
import { HelmetProvider } from 'react-helmet-async';

import {  BrowserRouter as Router } from "react-router-dom";
import { hot } from 'react-hot-loader/root';
import Routes from "./routes";


import configureStore from './store';

const initialState = {};

const store = configureStore(initialState);

const App = ({history}) => {
  return (
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
};

App.propTypes = {
  history: object.isRequired,
};

export default hot(App);

