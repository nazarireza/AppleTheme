/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';

import ThemeProvider from '../src/ThemeContext';
import Page1 from './Page1';

const App: () => React$Node = () => {
  return (
    <ThemeProvider>
      <Page1 />
    </ThemeProvider>
  );
};

export default App;
