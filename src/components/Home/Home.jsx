import { Link } from "react-router-dom";
import { HeroContainerDiv, HeroH1, ImgContainerDiv, Img } from "./Home.styled";
import Logo from "../../images/logo.png";

const Home = () => {
  return (
    <HeroContainerDiv>
      <ImgContainerDiv>
        <Img src={Logo} alt="Auto Rental Logo" />
      </ImgContainerDiv>
      <Link to="/catalog">
        <HeroH1>Auto Rental</HeroH1>
      </Link>
    </HeroContainerDiv>
  );
};

export default Home;
