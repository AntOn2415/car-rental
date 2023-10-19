import { Outlet } from "react-router-dom";

import { AppBar } from "../AppBar/AppBar";
import { Suspense } from "react";

import { ContainerDiv } from "./Layout.styled";

const Layout = () => {
  return (
    <>
      <AppBar />
      <ContainerDiv>
        <Suspense fallback={"loading..."}>
          <Outlet />
        </Suspense>
      </ContainerDiv>
    </>
  );
};

export default Layout;
