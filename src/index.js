import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

import { ThemeProvider } from '@material-ui/core/styles';
import theme from './styles/theming/theme';
import './index.css';
import App from './App';

import * as serviceWorker from './serviceWorker';

const client = new ApolloClient({
  uri: 'https://countries-274616.ew.r.appspot.com'
});


ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </ThemeProvider>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
