import styled, { createGlobalStyle } from 'styled-components';

// Resets
const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box
  }
  :root {
    font-size: 62.5%;
  }
`;
export default GlobalStyles;

// Styles
export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  align-items: center;
`;