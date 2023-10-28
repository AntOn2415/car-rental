import React, { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import { perPage } from "../../service/CatalogCarsApi";
import { fetchCatalogCars } from "../../helpers/filters";
import CatalogList from "./CatalogList";
import FilterForm from "components/FilterForm";
import { Section, Btn, P } from "./Catalog.styled";
import Spinner from "components/Spinner";

const Catalog = () => {
  const [page, setPage] = useState(1);
  const [catalogData, setCatalogData] = useState(() =>
    JSON.parse(window.localStorage.getItem("catalogData") ?? "[]")
  );
  const [showLoadMoreBtn, setShowLoadMoreBtn] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [filterData, setFilterData] = useState({});

  const handleFilterChange = filter => {
    setFilterData(filter);
    setPage(1);
  };

  useEffect(() => {
    const fetchDataForPage = async page => {
      try {
        setIsLoadingMore(true);
        const data = await fetchCatalogCars(page, perPage, filterData);
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
  }, [filterData, page]);

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  useEffect(() => {
    window.localStorage.setItem("catalogData", JSON.stringify(catalogData));
  }, [catalogData]);

  const scrollToOldCatalog = () => {
    scroll.scrollMore(600, {
      duration: 500,
      smooth: "easeInOutQuad",
    });
  };

  return (
    <Section>
      <FilterForm onFilterChange={handleFilterChange} isLoading={isLoading} />
      {isLoading ? (
        <Spinner />
      ) : catalogData.length > 0 ? (
        <CatalogList data={catalogData} />
      ) : (
        <P aria-label="No results found for your search criteria. Please try different filters or check back later.">
          No cars match your search criteria. Please refine your filters or check again later.
        </P>
      )}
      {showLoadMoreBtn && !isLoading && (
        <Btn
          type="button"
          onClick={handleLoadMore}
          disabled={isLoadingMore}
          aria-label="Load more button"
          aria-disabled={isLoadingMore ? "true" : "false"}
        >
          {!isLoadingMore ? "Load more" : "Loading..."}
        </Btn>
      )}
    </Section>
  );
};

export default Catalog;
