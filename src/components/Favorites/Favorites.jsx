import React, { useEffect, useState } from "react";
import { Section, CatalogUl, StyledLink } from "./Favorites.styled";
import CatalogItem from "../Catalog/CatalogItem";
import Spinner from "components/Spinner";

const Favorites = () => {
  const [favoriteCars, setFavoriteCars] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const updateFavoriteCars = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavoriteCars(favorites);
  };

  useEffect(() => {
    updateFavoriteCars();
    setIsLoading(false);
  }, []);

  const removeFromFavorites = car => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const updatedFavorites = favorites.filter(fav => fav.id !== car.id);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    updateFavoriteCars();
  };

  return (
    <Section>
      {isLoading ? (
        <Spinner />
      ) : favoriteCars.length > 0 ? (
        <CatalogUl>
          {favoriteCars && favoriteCars.length > 0 ? (
            favoriteCars.map((car, index) => (
              <CatalogItem key={index} carCard={car} removeFromFavorites={removeFromFavorites} />
            ))
          ) : (
            <p>Your favorite cars list is empty. Start browsing and add cars to your favorites.</p>
          )}
        </CatalogUl>
      ) : (
        <>
          <p>Your favorite cars list is empty. Start browsing and add cars to your favorites.</p>
        </>
      )}
      {!isLoading && <StyledLink to="/catalog">Back to Catalog</StyledLink>}
    </Section>
  );
};

export default Favorites;
