// import React from "react";
// import ReactDOM from "react-dom";

// import App from "./App";

var a = 1;
import React from 'react';
import { render, hydrate } from 'react-dom';
import Loadable from 'react-loadable';
import { createBrowserHistory } from 'history';
 
 
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


