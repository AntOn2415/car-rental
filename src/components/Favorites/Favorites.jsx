import { useEffect, useState } from "react";
import { fetchCarAll } from "../../service/CatalogCarsApi";
import { Section, CatalogUl, StyledLink } from "./Favorites.styled";
import CatalogItem from "../Catalog/CatalogItem";
import Spinner from "components/Spinner";

const Favorites = () => {
  const [favoriteCars, setFavoriteCars] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchCarAll();
        const favorites = localStorage.getItem("favorites");
        const favoriteIds = favorites ? JSON.parse(favorites) : [];
        const filteredCatalogData = data.filter(car => favoriteIds.includes(car.id));
        setFavoriteCars(filteredCatalogData);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  return (
    <Section>
      {isLoading ? (
        <Spinner />
      ) : favoriteCars.length > 0 ? (
        <CatalogUl>
          {favoriteCars.map(car => (
            <CatalogItem key={car.id} carCard={car} />
          ))}
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
