import React from 'react';
import ReactDOM from 'react-dom';
import Routes from '@/routes';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { configureStore } from '@/application/redux/store';
import * as serviceWorker from '@/serviceWorker';

import defaultTheme from '@/views/styles/themes/default/index';
import GlobalStyle from '@/views/styles/normalize';

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
      <ThemeProvider theme={defaultTheme}>
    <Provider store={store}>
        <GlobalStyle />
        <Routes />
    </Provider>
      </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
