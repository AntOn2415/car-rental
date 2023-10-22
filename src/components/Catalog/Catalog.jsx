import { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import { fetchCatalogCars, perPage } from "../../service/CatalogCarsApi";
import CatalogList from "./CatalogList";
import Filter from "components/Filter";
import { Section, Btn } from "./Catalog.styled";
import Spinner from "components/Spinner";

const Catalog = () => {
  const [page, setPage] = useState(1);
  const [catalogData, setCatalogData] = useState([]);
  const [showLoadMoreBtn, setShowLoadMoreBtn] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  useEffect(() => {
    const fetchDataForPage = async page => {
      try {
        setIsLoadingMore(true);
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
        if (page > 1) {
          scrollToOldCatalog();
        }
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoadingMore(false);
      }
    };

    fetchDataForPage(page);
  }, [page]);

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const scrollToOldCatalog = () => {
    scroll.scrollMore(600, {
      duration: 500,
      smooth: "easeInOutQuad",
    });
  };

  return (
    <Section>
      <Filter />
      {isLoading ? (
        <Spinner />
      ) : catalogData.length > 0 ? (
        <CatalogList data={catalogData} />
      ) : (
        <p>No data available.</p>
      )}
      {showLoadMoreBtn && !isLoading && (
        <Btn onClick={handleLoadMore} disabled={isLoadingMore}>
          Load more
        </Btn>
      )}
    </Section>
  );
};

export default Catalog;
