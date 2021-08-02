import { css } from 'styled-components';
import theme from '../index';

const { breakpoints } = theme;

export const breakpointsMedia = (cssByBreakpoints) => {
  const breakpoinstNames = Object.keys(cssByBreakpoints);
  return breakpoinstNames.map((breakpoint) => css`
            @media screen and (min-width: ${breakpoints[breakpoint]}px) {
                ${cssByBreakpoints[breakpoint]}
            }
        `);
};
