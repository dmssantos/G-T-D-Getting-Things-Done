import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root{
    --black: #000;
    --white: #E5E5E5;
    --blueLight: #0A66C2;
    --placeholder: rgba(229, 229, 229, 0.5);
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  input {
    background-color: transparent;
    padding: 10px;
  }

  input:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
  }

  input::placeholder {
    color: var(--placeholder);
  }
`;
