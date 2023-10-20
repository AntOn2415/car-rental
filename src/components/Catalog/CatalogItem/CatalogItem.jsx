import { useState } from "react";
import Modal from "../../Modal";

import {
  CatalogLi,
  CardContainer,
  ImageContainer,
  Img,
  DefaultDiv,
  CarBriefInfo,
  H2,
  Span,
  YearP,
  PriceP,
  CarSnapshotDiv,
  DetailP,
  Btn,
} from "./CatalogItem.styled";

const CatalogItem = ({ carCard }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  if (!carCard) {
    return null;
  }

  function getRandomValue(arr1, arr2) {
    const randomArray = Math.random() < 0.5 ? arr1 : arr2;
    const randomIndex = Math.floor(Math.random() * randomArray.length);
    return randomArray[randomIndex];
  }

  const handleButtonClick = () => {
    setIsOpenModal(true);
  };

  const handleCloseModal = () => {
    setIsOpenModal(false);
  };

  const {
    img,
    make,
    year,
    model,
    type,
    rentalPrice,
    rentalCompany,
    mileage,
    fuelConsumption,
    accessories,
    functionalities,
  } = carCard;

  const randomFeature = getRandomValue(accessories, functionalities);

  const addressParts = carCard.address.split(", ");

  return (
    <CatalogLi>
      <CardContainer>
        <ImageContainer>
          {img ? <Img src={img} alt={make} /> : <DefaultDiv>No Image</DefaultDiv>}
        </ImageContainer>
        <CarBriefInfo>
          <H2>
            {make} <Span>{model}</Span>
          </H2>
          <YearP> {`, ${year}`}</YearP>
          <PriceP>{rentalPrice}</PriceP>
        </CarBriefInfo>
        <CarSnapshotDiv>
          <DetailP>{addressParts[1]}</DetailP>
          <DetailP>{addressParts[2]}</DetailP>
          <DetailP>{rentalCompany}</DetailP>
          <DetailP>{type}</DetailP>
          <DetailP>{fuelConsumption}</DetailP>
          <DetailP>{mileage}</DetailP>
          <DetailP>{randomFeature}</DetailP>
        </CarSnapshotDiv>

        <Btn type="button" onClick={handleButtonClick}>
          Learn more
        </Btn>
      </CardContainer>
      {isOpenModal && (
        <Modal onCloseModal={handleCloseModal}>
          {/* <CarDetails carCard={carCard} onCloseModal={handleCloseModal} /> */}
        </Modal>
      )}
    </CatalogLi>
  );
};

export default CatalogItem;
