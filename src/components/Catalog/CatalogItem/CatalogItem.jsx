import { useState, useEffect } from "react";
import Modal from "../../Modal";
import CarDetails from "../CarDetails";
import hart from "../../../images/icons.svg";

import {
  CatalogLi,
  CardContainer,
  ImageContainer,
  ToggleEventBtn,
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
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = getFavoritesFromStorage();
    setIsFavorite(favorites.includes(carCard.id));
  }, [carCard]);

  function getRandomValue(arr1, arr2) {
    const randomArray = Math.random() < 0.5 ? arr1 : arr2;
    const randomIndex = Math.floor(Math.random() * randomArray.length);
    return randomArray[randomIndex];
  }

  const getFavoritesFromStorage = () => {
    const favorites = localStorage.getItem("favorites");
    return favorites ? JSON.parse(favorites) : [];
  };

  const saveFavoritesToStorage = favorites => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  };

  const toggleFavorite = carId => {
    const favorites = getFavoritesFromStorage();

    if (favorites.includes(carId)) {
      const updatedFavorites = favorites.filter(id => id !== carId);
      saveFavoritesToStorage(updatedFavorites);
    } else {
      const updatedFavorites = [...favorites, carId];
      saveFavoritesToStorage(updatedFavorites);
    }

    setIsFavorite(!isFavorite);
  };

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
          <ToggleEventBtn
            type="button"
            onClick={() => toggleFavorite(carCard.id)}
            data-is-favorite={isFavorite}
            aria-label={isFavorite ? "Remove from Favorites" : "Add to Favorites"}
          >
            <svg width="18" height="18">
              <use href={`${hart}#icon-hart`} />
            </svg>
          </ToggleEventBtn>

          {img ? <Img src={img} alt={make} /> : <DefaultDiv>{make}</DefaultDiv>}
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

        <Btn type="button" onClick={handleButtonClick} aria-label="Learn more about this car">
          Learn more
        </Btn>
      </CardContainer>
      {isOpenModal && (
        <Modal isOpenModal={isOpenModal} onCloseModal={handleCloseModal}>
          <CarDetails carCard={carCard} onCloseModal={handleCloseModal} />
        </Modal>
      )}
    </CatalogLi>
  );
};

export default CatalogItem;
