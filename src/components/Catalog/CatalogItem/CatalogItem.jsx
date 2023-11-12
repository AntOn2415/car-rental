import { useState, useEffect, useCallback } from "react";
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

const CatalogItem = ({ carCard, removeFromFavorites }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = getFavoritesFromStorage();
    setIsFavorite(favorites.some(fav => fav.id === carCard.id));
  }, [carCard]);

  function getRandomValue(arr1, arr2) {
    const randomArray = Math.random() < 0.5 ? arr1 : arr2;
    if (!Array.isArray(randomArray) || randomArray.length === 0) {
      return null;
    }

    const randomIndex = Math.floor(Math.random() * randomArray.length);
    return randomArray[randomIndex];
  }

  const getFavoritesFromStorage = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    return favorites;
  };

  const saveFavoritesToStorage = favorites => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  };

  const toggleFavorite = useCallback(() => {
    const favorites = getFavoritesFromStorage();
    const carId = carCard.id;

    const isAlreadyFavorite = favorites.some(fav => fav.id === carId);

    if (isAlreadyFavorite) {
      const updatedFavorites = favorites.filter(fav => fav.id !== carId);
      saveFavoritesToStorage(updatedFavorites);
    } else {
      const updatedFavorites = [...favorites, carCard];
      saveFavoritesToStorage(updatedFavorites);
    }

    setIsFavorite(prev => !prev);
  }, [carCard, setIsFavorite]);

  const handleButtonClick = () => {
    setIsOpenModal(true);
  };

  const handleCloseModal = () => {
    if (isOpenModal) {
      setIsOpenModal(prevState => !prevState);
    }
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
  const addressParts = carCard && carCard.address ? carCard.address.split(", ") : [];

  return (
    <CatalogLi>
      <CardContainer>
        <ImageContainer>
          <ToggleEventBtn
            type="button"
            onClick={() => {
              toggleFavorite();
              if (removeFromFavorites) {
                removeFromFavorites(carCard);
              }
            }}
            data-is-favorite={isFavorite}
            aria-label={isFavorite ? "Remove from Favorites" : "Add to Favorites"}
          >
            <svg>
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
          <CarDetails carCard={carCard} />
        </Modal>
      )}
    </CatalogLi>
  );
};

export default CatalogItem;
