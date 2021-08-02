/* eslint-disable import/prefer-default-export */
import { breakpointsMedia } from './breakpoinstMedia';

export const propToStyle = (propName) => (props) => {
  const propValue = props[propName];

  if (typeof propValue === 'string' || typeof propValue === 'number') {
    return {
      [propName]: propValue,
    };
  }

  if (typeof propValue === 'object') {
    return breakpointsMedia({
      xs: {
        [propName]: propValue.xs,
      },
      sm: {
        [propName]: propValue.sm,
      },
      md: {
        [propName]: propValue.md,
      },
      lg: {
        [propName]: propValue.lg,
      },
      xl: {
        [propName]: propValue.xl,
      },
    });
  }
  return {
    [propName]: propValue,
  };
};
