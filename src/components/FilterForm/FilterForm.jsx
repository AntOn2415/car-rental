import React, { useState, useEffect } from "react";
import Select from "react-select";
import { fetchCarMakesList, fetchCarPricesList } from "../../helpers/filters";
import iconChevron from "../../images/icons.svg";
import {
  FilterContainerDiv,
  ContainerDiv,
  Label,
  ContainerInputDiv,
  ContainerSvg,
  P,
  LabelInput,
  Input,
  InputTo,
  FormBtn,
} from "./FilterForm.styled";
import { customSelectStyles } from "../../helpers/customSelectStyles";

const FilterForm = ({ onFilterChange }) => {
  const [selectedMake, setSelectedMake] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [minMileage, setMinMileage] = useState("");
  const [maxMileage, setMaxMileage] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [makes, setMakes] = useState([]);
  const [prices, setPrices] = useState([]);
  const [minMileageError, setMinMileageError] = useState(false);
  const [maxMileageError, setMaxMileageError] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const makes = await fetchCarMakesList();
        setMakes(makes);

        const prices = await fetchCarPricesList();
        setPrices(prices);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handleFilter = async () => {
    if (isSearching) {
      return;
    }

    setIsSearching(true);

    try {
      const filter = {
        make: selectedMake,
        price: selectedPrice,
        minMileage,
        maxMileage,
      };

      await onFilterChange(filter);
    } catch (error) {
      console.error(error);
    } finally {
      setIsSearching(false);
    }
  };
  const handleMinMileageChange = e => {
    const value = Number(e.target.value);

    if (value === "" || (value > 0 && (value <= maxMileage || maxMileage === ""))) {
      setMinMileage(value);
      setMinMileageError(false);
    } else {
      console.error("Некоректний ввід для мінімального пробігу");
      setMinMileageError(true);
    }
  };

  const handleMaxMileageChange = e => {
    const value = Number(e.target.value);

    if (value === "" || (value >= 0 && (value >= minMileage || minMileage === ""))) {
      setMaxMileage(value);
      setMaxMileageError(false);
    } else {
      console.error("Некоректний ввід для максимального пробігу");
      setMaxMileageError(true);
    }
  };

  const makeOptions = makes.map(make => ({
    value: make,
    label: make,
  }));

  const priceOptions = prices.map(price => ({
    value: price,
    label: `${price}`,
  }));

  const isFormEmpty = () => {
    return selectedMake === "" && selectedPrice === "" && minMileage === "" && maxMileage === "";
  };

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        handleFilter();
      }}
    >
      <FilterContainerDiv>
        <ContainerDiv>
          <Label htmlFor="makeSelect">Car brand:</Label>
          <Select
            id="makeSelect"
            value={makeOptions.find(option => option.value === selectedMake)}
            onChange={selectedOption => setSelectedMake(selectedOption.value)}
            options={makeOptions}
            placeholder="Enter the text"
            styles={customSelectStyles}
            onMenuOpen={() => setIsMenuOpen("makeSelect")}
            onMenuClose={() => setIsMenuOpen(false)}
          />
          <ContainerSvg data-is-active={isMenuOpen === "makeSelect"}>
            <svg width="20" height="20">
              <use href={`${iconChevron}#icon-chevron`} />
            </svg>
          </ContainerSvg>
        </ContainerDiv>
        <ContainerDiv>
          <Label htmlFor="priceSelect">Price/1 hour</Label>
          <Select
            id="priceSelect"
            value={priceOptions.find(option => option.value === selectedPrice)}
            onChange={selectedOption => setSelectedPrice(selectedOption.value)}
            options={priceOptions}
            placeholder="To $"
            styles={customSelectStyles}
            onMenuOpen={() => setIsMenuOpen("priceSelect")}
            onMenuClose={() => setIsMenuOpen(false)}
            isMulti
          />
          <ContainerSvg data-is-active={isMenuOpen === "priceSelect"}>
            <svg width="20" height="20">
              <use href={`${iconChevron}#icon-chevron`} />
            </svg>
          </ContainerSvg>
        </ContainerDiv>
        <ContainerDiv>
          <P>Car mileage / km</P>
          <div style={{ display: "flex" }}>
            <ContainerInputDiv>
              <LabelInput htmlFor="minMileageInput">From</LabelInput>
              <Input
                type="number"
                id="minMileageInput"
                value={minMileage}
                onChange={handleMinMileageChange}
                defaultValue={0}
                data-error={minMileageError}
              />
            </ContainerInputDiv>
            <ContainerInputDiv>
              <LabelInput htmlFor="maxMileageInput">To</LabelInput>
              <InputTo
                type="number"
                id="maxMileageInput"
                value={maxMileage}
                onChange={handleMaxMileageChange}
                defaultValue={Infinity}
                data-error={maxMileageError}
              />
            </ContainerInputDiv>
          </div>
        </ContainerDiv>

        <FormBtn type="submit" aria-label="Search for cars" disabled={isSearching || isFormEmpty()}>
          {isSearching ? "Searching..." : "Search"}
        </FormBtn>
      </FilterContainerDiv>
    </form>
  );
};

export default FilterForm;
