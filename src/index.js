import React from 'react';
import ReactDOM from 'react-dom';
import './firebase';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store';
import App from './components/App';
import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Mulish', sans-serif;
}
`

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Global />
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
