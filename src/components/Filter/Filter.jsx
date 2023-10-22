import React, { useState } from "react";

import {
  FilterContainerDiv,
  ContainerDiv,
  Label,
  ContainerInputDiv,
  Select,
  Option,
} from "./Filter.styled";

const Filter = ({ onFilterChange }) => {
  const [selectedMake, setSelectedMake] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [minMileage, setMinMileage] = useState("");
  const [maxMileage, setMaxMileage] = useState("");

  const makes = ["Make 1", "Make 2", "Make 3"]; // Ось ваш список марок автомобілів
  const prices = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110]; // Ось ваш список цін за годину

  const handleFilter = () => {
    const filter = {
      make: selectedMake,
      price: selectedPrice,
      minMileage,
      maxMileage,
    };
    onFilterChange(filter);
  };

  return (
    <FilterContainerDiv>
      <ContainerDiv>
        <Label>Car brand:</Label>
        <Select value={selectedMake} onChange={e => setSelectedMake(e.target.value)}>
          <Option value="">Enter the text</Option>
          {makes.map(make => (
            <Option key={make} value={make}>
              {make}
            </Option>
          ))}
        </Select>
      </ContainerDiv>
      <ContainerDiv>
        <Label>Price/ 1 hour</Label>
        <Select value={selectedPrice} onChange={e => setSelectedPrice(e.target.value)}>
          <Option value="">To $</Option>
          {prices.map(price => (
            <option key={price} value={price}>
              {`${price}`}
            </option>
          ))}
        </Select>
      </ContainerDiv>
      <ContainerDiv>
        <Label>Сar mileage / km</Label>
        <ContainerInputDiv>
          <input
            type="number"
            placeholder="From"
            value={minMileage}
            onChange={e => setMinMileage(e.target.value)}
          />
          <input
            type="number"
            placeholder="To"
            value={maxMileage}
            onChange={e => setMaxMileage(e.target.value)}
          />
        </ContainerInputDiv>
      </ContainerDiv>

      <button onClick={handleFilter}>Search</button>
    </FilterContainerDiv>
  );
};

export default Filter;
