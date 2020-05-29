import React from 'react';

import './config/ReactotronConfig';

import GlobalStyle from './styles/global';

import Routes from './routes';

export default function App() {
  return (
    <>
      <Routes />
      <GlobalStyle />
    </>
  );
}
