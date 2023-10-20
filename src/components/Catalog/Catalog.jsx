import { useState, useEffect } from "react";
import { fetchCatalogCars, perPage } from "../../servise/CatalogCarsApi";
import CatalogList from "./CatalogList";
import { Section, Btn } from "./Catalog.styled";

const Catalog = () => {
  const [page, setPage] = useState(1);
  // const [showModal, setShowModal] = useState(false);
  // const [selectedCarCard, setSelectedCarCard] = useState("");
  const [catalogData, setCatalogData] = useState([]);
  // const [showLoadMoreBtn, setShowLoadMoreBtn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const fetchDataForPage = async page => {
    try {
      const data = await fetchCatalogCars(page, perPage);
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
  console.log(catalogData);
  useEffect(() => {
    fetchDataForPage(page);
  }, [page]);

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };
  return (
    <Section>
      {isLoading ? <p>Loading...</p> : <CatalogList data={catalogData} />}

      <Btn onClick={handleLoadMore}>Load more</Btn>
    </Section>
  );
};

export default Catalog;
