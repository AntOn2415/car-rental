import React from "react";
import CitySelect from "./CitySelect";
import { ContainerDiv, LinkDiv, LinkA, IconWrapperDiv } from "./HeaderControls.styled";
import { BsFillTelephoneFill } from "react-icons/bs";

const HeaderControls = () => {
  return (
    <ContainerDiv>
      <LinkDiv>
        <IconWrapperDiv>
          <BsFillTelephoneFill />
        </IconWrapperDiv>
        <LinkA href="tel:+380730000000">Contact Us</LinkA>
      </LinkDiv>
      <CitySelect />
    </ContainerDiv>
  );
};

export default HeaderControls;
