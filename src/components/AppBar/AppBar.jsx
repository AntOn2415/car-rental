import Navigation from "../Navigation/Navigation";
import HeaderControls from "../HeaderControls";

import { Header, HeaderContainer } from "./AppBar.styled";

export const AppBar = () => {
  return (
    <Header>
      <HeaderContainer>
        <Navigation />
        <HeaderControls />
      </HeaderContainer>
    </Header>
  );
};
