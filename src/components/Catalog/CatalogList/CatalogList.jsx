// import { useState, useEffect } from "react";
import CatalogItem from "../CatalogItem";

import { CatalogUl } from "./CatalogList.styled";

const CatalogList = ({ data }) => {
  console.log(data);
  return (
    <CatalogUl>
      {data.map(carCard => (
        <CatalogItem key={carCard.id} carCard={carCard} />
      ))}
      <CatalogItem />
    </CatalogUl>
  );
};

export default CatalogList;
