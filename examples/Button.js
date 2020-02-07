import React from 'react';
import {TouchableOpacity} from 'react-native';

import Animated from 'react-native-reanimated';

import useTheme from '../src/UseTheme';

const AnimatedButton = Animated.createAnimatedComponent(TouchableOpacity);

const Button: () => React$Node = ({onPress, title, style}) => {
  const {bg, fg} = useTheme();

  return (
    <AnimatedButton
      activeOpacity={0.7}
      style={[{backgroundColor: fg, padding: 10, borderRadius: 5}, style]}
      {...{onPress}}>
      <Animated.Text style={{color: bg}}>{title}</Animated.Text>
    </AnimatedButton>
  );
};

export default Button;
