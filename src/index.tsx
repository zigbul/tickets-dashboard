import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './firebase';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
const store = require('./store');
const App = require('./components/App');

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
