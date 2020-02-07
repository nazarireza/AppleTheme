import React from 'react';
import {StyleSheet} from 'react-native';

import useTheme from '../src/UseTheme';
import Stack from './Stack';
import Button from './Button';

const Page1 = props => {
  const {theme, changeTheme} = useTheme();
  return (
    <Stack style={styles.container}>
      <Button
        title="Change Theme"
        onPress={() => changeTheme(theme === 'LIGHT' ? 'DARK' : 'LIGHT')}
      />
    </Stack>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Page1;
