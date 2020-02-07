/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {createContext, useState, useMemo} from 'react';

export const ThemeContext = createContext({});

const ThemeProvider: () => React$Node = ({children}) => {
  const [theme, setTheme] = useState('LIGHT');

  const ThemeContextValue = useMemo(
    () => ({
      theme,
      changeTheme: newtheme => setTheme(newtheme),
    }),
    [theme],
  );

  return (
    <ThemeContext.Provider value={ThemeContextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
