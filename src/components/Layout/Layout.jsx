import { Outlet } from "react-router-dom";

import { AppBar } from "../AppBar/AppBar";

import { ContainerDiv } from "./Layout.styled";

const Layout = () => {
  return (
    <ContainerDiv>
      <AppBar />
      <Outlet />
    </ContainerDiv>
  );
};

export default Layout;
