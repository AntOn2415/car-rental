import { useState, useEffect } from "react";
import { fetchCatalogCars, perPage } from "../../servise/CatalogCarsApi";
import { ContainerDiv, Btn } from "./Catalog.styled";

const Catalog = () => {
  const [page, setPage] = useState(1);

  const fetchDataForPage = async page => {
    try {
      const data = await fetchCatalogCars(page, perPage);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchDataForPage(page);
  }, [page]);

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };
  return (
    <ContainerDiv>
      <Btn onClick={handleLoadMore}>Load more</Btn>
    </ContainerDiv>
  );
};

export default Catalog;
