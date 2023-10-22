import {
  Section,
  HiddenH1,
  HeroContainerDiv,
  LinkStyled,
  ImgContainerDiv,
  Img,
} from "./Home.styled";
import Logo from "../../images/logo.png";
import Description from "./Description";

const Home = () => {
  return (
    <Section>
      <HeroContainerDiv>
        <HiddenH1>Auto Renta</HiddenH1>
        <ImgContainerDiv>
          <Img src={Logo} alt="Auto Rental Logo" />
        </ImgContainerDiv>
        <LinkStyled to="/catalog">Explore Our Fleet</LinkStyled>
      </HeroContainerDiv>
      <Description />
    </Section>
  );
};

export default Home;
