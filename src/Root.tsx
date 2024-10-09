import { Outlet } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    width: 1920px;
    height: 1080px;
    background-color: #0D1117;
  }
`;

function Root() {
  return (
    <>
      <GlobalStyle />
      <Outlet />
    </>
  );
}

export default Root;
