import React from 'react';

import Animated from 'react-native-reanimated';

import useTheme from '../src/UseTheme';

const Stack: () => React$Node = ({children, style}) => {
  const {bg} = useTheme();

  return (
    <Animated.View style={[style, {backgroundColor: bg}]}>
      {children}
    </Animated.View>
  );
};

export default Stack;
