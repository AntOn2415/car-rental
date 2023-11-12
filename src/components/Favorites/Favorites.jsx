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
    setIsLoading(false);
  };

  useEffect(() => {
    updateFavoriteCars();
  }, []);

  const removeFromFavorites = car => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const updatedFavorites = favorites.filter(fav => fav.id !== car.id);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    updateFavoriteCars();
  };

  console.log(favoriteCars);

  if (isLoading || favoriteCars.length === 0) {
    return (
      <Section>
        {isLoading ? (
          <Spinner />
        ) : (
          <p>Your favorite cars list is empty. Start browsing and add cars to your favorites.</p>
        )}
        {!isLoading && <StyledLink to="/catalog">Back to Catalog</StyledLink>}
      </Section>
    );
  }

  return (
    <Section>
      <CatalogUl>
        {favoriteCars.map((car, index) => (
          <CatalogItem key={index} carCard={car} removeFromFavorites={removeFromFavorites} />
        ))}
      </CatalogUl>
      {!isLoading && <StyledLink to="/catalog">Back to Catalog</StyledLink>}
    </Section>
  );
};

export default Favorites;
