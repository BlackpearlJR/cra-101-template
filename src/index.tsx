import React from 'react';
import ReactDOM from 'react-dom';
import Routes from '@/routes';
import { ThemeProvider } from 'styled-components';
import * as serviceWorker from './serviceWorker';

import defaultTheme from '@/views/styles/themes/default/index';
import GlobalStyle from '@/views/styles/normalize';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
