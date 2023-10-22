import {
  Wrapper,
  Text,
  BounceAnim,
  RotateAnim,
  Tyre,
  P,
  P1,
  P2,
  P3,
  P4,
  P5,
  P6,
  WhiteCircle,
  Shadow,
  SpinnerOverlay,
} from "./Spinner.styled";

const Spinner = () => {
  return (
    <SpinnerOverlay>
      <Wrapper>
        <Text>Drive up...</Text>
        <BounceAnim>
          <RotateAnim>
            <Tyre>
              <P>L</P>
              <P1>o</P1>
              <P2>a</P2>
              <P3>d</P3>
              <P4>i</P4>
              <P5>n</P5>
              <P6>g</P6>
              <WhiteCircle />
            </Tyre>
          </RotateAnim>
        </BounceAnim>
        <Shadow />
      </Wrapper>
    </SpinnerOverlay>
  );
};

export default Spinner;
