import { render } from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';

import configureStore from 'configureStore';
import App from 'components/App';

import 'normalize.css';

const store = configureStore();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
