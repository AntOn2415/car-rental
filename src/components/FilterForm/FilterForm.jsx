import React, { useState, useEffect } from "react";
import { useCity } from "hooks/CityProvider";
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

const FilterForm = ({ onFilterChange, isSearching }) => {
  const [selectedMake, setSelectedMake] = useState("");
  const [selectedPrice, setSelectedPrice] = useState([]);
  const [minMileage, setMinMileage] = useState("");
  const [maxMileage, setMaxMileage] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [makes, setMakes] = useState([]);
  const [prices, setPrices] = useState([]);
  const [minMileageError, setMinMileageError] = useState(false);
  const [maxMileageError, setMaxMileageError] = useState(false);
  const { selectedCity } = useCity();

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
    try {
      const filter = {
        city: selectedCity,
        make: selectedMake,
        price: selectedPrice.map(option => option.value),
        minMileage,
        maxMileage,
      };

      await onFilterChange(filter);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleFilter();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCity]);

  const handleResetFilter = () => {
    setSelectedMake("");
    setSelectedPrice([]);
    setMinMileage("");
    setMaxMileage("");
    setMinMileageError(false);
    setMaxMileageError(false);
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
    return (
      selectedMake === "" &&
      Array.isArray(selectedPrice) &&
      selectedPrice.length === 0 &&
      minMileage === "" &&
      maxMileage === ""
    );
  };

  const handleInputChange = (inputValue, { action }) => {
    if (action === "input-change") {
      const sanitizedValue = inputValue.replace(/[^0-9]/g, "");
      const nearestLowerTen = Math.floor(sanitizedValue / 10) * 10;

      const newOptions = [
        { value: nearestLowerTen, label: `${nearestLowerTen}` },
        { value: nearestLowerTen + 10, label: `${nearestLowerTen + 10}` },
      ];

      setSelectedPrice(newOptions);
      return sanitizedValue;
    }
    return inputValue;
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
            value={selectedMake ? makeOptions.find(option => option.value === selectedMake) : null}
            onChange={selectedOption => setSelectedMake(selectedOption)}
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
            value={selectedPrice}
            onChange={selectedOptions => setSelectedPrice(selectedOptions)}
            options={priceOptions}
            placeholder="To $"
            styles={customSelectStyles}
            onMenuOpen={() => setIsMenuOpen("priceSelect")}
            onMenuClose={() => setIsMenuOpen(false)}
            isMulti
            onInputChange={handleInputChange}
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
        <FormBtn
          type="button"
          aria-label="Reset Filters"
          disabled={isFormEmpty()}
          onClick={handleResetFilter}
        >
          Reset Filters
        </FormBtn>
      </FilterContainerDiv>
    </form>
  );
};

export default FilterForm;
