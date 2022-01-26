import React from 'react';
import ReactDOM from 'react-dom';
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
    <Provider store={store}>
      <Global />
      <App />
    </Provider>,
  document.getElementById('root')
);
