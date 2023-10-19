import { Navigation } from "../Navigation/Navigation";

import { Header, HeaderContainer } from "./AppBar.styled";

export const AppBar = () => {
  return (
    <Header>
      <HeaderContainer>
        <Navigation />
      </HeaderContainer>
    </Header>
  );
};
