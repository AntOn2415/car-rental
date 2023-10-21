import { useState, useEffect } from "react";
import { fetchCatalogCars, perPage } from "../../service/CatalogCarsApi";
import CatalogList from "./CatalogList";
import { Section, Btn } from "./Catalog.styled";

const Catalog = () => {
  const [page, setPage] = useState(1);
  const [catalogData, setCatalogData] = useState([]);
  const [showLoadMoreBtn, setShowLoadMoreBtn] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  const fetchDataForPage = async page => {
    try {
      const data = await fetchCatalogCars(page, perPage);
      if (data.length < perPage) {
        setShowLoadMoreBtn(false);
      }
      if (page === 1) {
        setCatalogData(data);
      } else {
        setCatalogData(prevData => [...prevData, ...data]);
      }
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };
  // console.log(perPage);
  console.log(catalogData.length);

  useEffect(() => {
    fetchDataForPage(page);
  }, [page]);

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };
  return (
    <Section>
      {isLoading ? (
        <p>Loading...</p>
      ) : catalogData.length > 0 ? (
        <CatalogList data={catalogData} />
      ) : (
        <p>No data available.</p>
      )}
      {showLoadMoreBtn && !isLoading && <Btn onClick={handleLoadMore}>Load more</Btn>}
    </Section>
  );
};

export default Catalog;
