import { createGlobalStyle } from "styled-components";
import TTFirsNeue from "../public/TTFirsNeueFont/stylesheet.css";
const GlobalStyles = createGlobalStyle` 
  @font-face {
    font-family: "TT Firs Neue";
    src: url(${TTFirsNeue}) format("truetype");
  }

  html,
  body{
    padding: 0;
    margin: 0;
    font-family: "TT Firs Neue", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 1rem;
    color: #000000;
    scroll-behavior: smooth;
  }

  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  a{
    text-decoration: none;
    cursor: pointer;
  }

  ::-webkit-scrollbar {
    width: 5px;
    height: 0px;
    border-radius: 20px;
  }
  ::-webkit-scrollbar-track {
    background-color: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #219653;
  }
`;
export default GlobalStyles;
