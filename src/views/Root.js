import React from 'react';
import { Provider } from 'react-redux';
import store from 'store';
import Paths from 'routes/Paths';
import GlobalStyle from 'theme/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/mainTheme';

const Root = () => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Paths />
      </Provider>
    </ThemeProvider>
  </>
);

export default Root;
