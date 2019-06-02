import React from 'react';
import { Provider } from 'react-redux';
import store from 'store';
import Paths from 'routes/Paths';
import GlobalStyle from 'theme/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/mainTheme';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faHome,
  faWifi,
  faTv,
  faMobileAlt,
  faChevronDown,
  faChevronUp,
} from '@fortawesome/free-solid-svg-icons';

library.add(fab, faHome, faWifi, faTv, faMobileAlt, faChevronDown, faChevronUp);

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
