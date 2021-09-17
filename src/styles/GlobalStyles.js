import { createGlobalStyle } from 'styled-components';


export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    max-height: 100vh;
    height: 100%;
    background-color: #747572;
  }
  
  *, button, input {
    border: 0;
    background-color: none;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }

  :root {
    --ice: #f0efeb;
    --gray: #747572;
    --green: #06d6a0;
    --red: #ef476f;
  }
`;
