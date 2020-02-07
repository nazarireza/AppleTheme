import {useContext, useMemo, useRef, useEffect} from 'react';

import Animated, {Easing, set, useCode, block} from 'react-native-reanimated';
import {interpolateColor, timing} from 'react-native-redash';

import {ThemeContext} from './ThemeContext';

const useTheme = () => {
  const {theme, changeTheme} = useContext(ThemeContext);
  const colorAnimator = useMemo(() => new Animated.Value(0), [theme]);
  let firstRender = useRef(true);

  useCode(
    () =>
      block(
        set(
          colorAnimator,
          timing({
            to: 1,
            duration: !firstRender.current ? 300 : 0,
            easing: Easing.linear,
          }),
        ),
      ),
    [theme],
  );

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
    }
  }, [theme]);

  const color = interpolateColor(colorAnimator, {
    inputRange: [0, 1],
    outputRange: theme !== 'LIGHT' ? ['white', 'black'] : ['black', 'white'],
  });

  const backgroundColor = interpolateColor(colorAnimator, {
    inputRange: [0, 1],
    outputRange: theme === 'LIGHT' ? ['white', 'black'] : ['black', 'white'],
  });

  return {bg: backgroundColor, fg: color, theme, changeTheme};
};

export default useTheme;
