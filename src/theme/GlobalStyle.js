import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

// CSS Reset
export const GlobalStyle = createGlobalStyle`
  ${normalize}
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${({ theme }) => theme.fontFamily};
  }

    /* Full height layout */
    html, body {
    display: flex;
    min-height: 100vh;
    width: 100%;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;
