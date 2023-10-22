import React from "react";
import {
  Container,
  H2,
  H3,
  H3All,
  Number,
  TextDescription,
  Li,
  Li2,
  P,
  StyledLink,
} from "./Description.styled";

const Description = () => {
  return (
    <Container>
      <H2>Discover the Car Rental Experience</H2>
      <P>
        Welcome to our Car Rental App, your gateway to hassle-free car rental in Ukraine. We take
        pride in offering you an exceptional car rental experience with the following advantages
      </P>
      <ul>
        <Li>
          <div>
            <Number>1.</Number>
            <H3>Wide Selection of Quality Cars</H3>
            <TextDescription>
              Explore a diverse fleet of well-maintained vehicles that cater to your every need.
              Whether you're looking for an economical choice or a luxury ride, we've got you
              covered.
            </TextDescription>
          </div>
        </Li>
        <Li2>
          <div>
            <Number>2.</Number>
            <H3All>User-Friendly Catalog</H3All>
            <TextDescription>
              Our catalog page simplifies your car selection process. Filter cars by make, hourly
              rental price, or mileage to find the perfect vehicle for your journey. We even provide
              detailed information and images for each car.
            </TextDescription>
          </div>
        </Li2>
        <Li>
          <div>
            <Number>3.</Number>
            <H3>Convenient Favorites List</H3>
            <TextDescription>
              Never lose track of the cars you love. Our favorites page allows you to save and
              revisit your preferred advertisements. Even after refreshing the page, your favorites
              will be right where you left them.
            </TextDescription>
          </div>
        </Li>
      </ul>
      <StyledLink to="/catalog">Go to Catalog</StyledLink>
    </Container>
  );
};

export default Description;
