import CatalogItem from "../CatalogItem";

import { CatalogUl } from "./CatalogList.styled";

const CatalogList = ({ data }) => {
  return (
    <CatalogUl>
      {data.map(carCard => (
        <CatalogItem key={carCard.id} carCard={carCard} />
      ))}
    </CatalogUl>
  );
};

export default CatalogList;
