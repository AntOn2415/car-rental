import { nanoid } from "nanoid";

import {
  CardContainer,
  ImageContainer,
  Img,
  DefaultDiv,
  CarBriefInfo,
  H2,
  Span,
  YearP,
  CarSnapshotDiv,
  DetailP,
  LinkA,
  HiddenH3,
  DescriptionP,
  H3,
  ExtraInfoDiv,
  ConditionsDiv,
  ConditionP,
  ConditionSpan,
} from "./CarDetails.styled";

const CarDetails = ({ carCard }) => {
  if (!carCard) {
    return null;
  }

  const {
    img,
    id,
    make,
    year,
    model,
    type,
    rentalPrice,
    description,
    rentalConditions,
    mileage,
    fuelConsumption,
    engineSize,
    accessories,
    functionalities,
    address,
  } = carCard;

  const addressParts = carCard && address ? address.split(", ") : [];
  const mergedArray = [...accessories, ...functionalities];
  const conditionsArray = rentalConditions ? rentalConditions.split("\n") : [];
  const rearrangedPrice = rentalPrice.replace("$", "") + "$";

  return (
    <CardContainer>
      <ImageContainer>
        {img ? <Img src={img} alt={make} /> : <DefaultDiv>{make}</DefaultDiv>}
      </ImageContainer>
      <CarBriefInfo>
        <H2>
          {make} <Span>{model}</Span>
        </H2>
        <YearP> {`, ${year}`}</YearP>
      </CarBriefInfo>
      <CarSnapshotDiv>
        <DetailP>{addressParts[1]}</DetailP>
        <DetailP>{addressParts[2]}</DetailP>
        <DetailP>Id: {id}</DetailP>
        <DetailP>Year: {year}</DetailP>
        <DetailP>Type: {type}</DetailP>
        <DetailP>Fuel Consumption: {fuelConsumption}</DetailP>
        <DetailP>Engine Size: {engineSize}</DetailP>
      </CarSnapshotDiv>
      <HiddenH3>description</HiddenH3>
      <DescriptionP>{description}</DescriptionP>
      <H3>Accessories and functionalities:</H3>
      <ExtraInfoDiv>
        {mergedArray.map(extra => (
          <DetailP key={nanoid()}>{extra}</DetailP>
        ))}
      </ExtraInfoDiv>
      <H3>Rental Conditions:</H3>
      <ConditionsDiv>
        {conditionsArray.map(condition => {
          const [label, value] = condition.split(":").map(item => item.trim());
          return (
            <ConditionP key={nanoid()}>
              {label} {isNaN(value) ? value : <ConditionSpan>{`: ${value}`}</ConditionSpan>}
            </ConditionP>
          );
        })}
        <ConditionP>
          Mileage<ConditionSpan>{`: ${mileage.toLocaleString("en-US")}`}</ConditionSpan>
        </ConditionP>
        <ConditionP>
          Price<ConditionSpan>{`: ${rearrangedPrice}`}</ConditionSpan>
        </ConditionP>
      </ConditionsDiv>
      <LinkA href="tel:+380730000000">Rental car</LinkA>
    </CardContainer>
  );
};

export default CarDetails;
