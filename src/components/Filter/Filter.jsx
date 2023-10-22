import React, { useState } from "react";

import {
  FilterContainerDiv,
  ContainerDiv,
  Label,
  ContainerInputDiv,
  Select,
  Option,
  Input,
  InputTo,
  FormBtn,
} from "./Filter.styled";

const Filter = ({ onFilterChange }) => {
  const [selectedMake, setSelectedMake] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [minMileage, setMinMileage] = useState("");
  const [maxMileage, setMaxMileage] = useState("");

  const makes = ["Volvo", "HUMMER", "Mitsubishi"];
  const prices = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110];

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
            <Option key={price} value={price}>
              {`${price}`}
            </Option>
          ))}
        </Select>
      </ContainerDiv>
      <ContainerDiv>
        <Label>Сar mileage / km</Label>
        <ContainerInputDiv>
          <Input
            type="number"
            placeholder="From"
            value={minMileage}
            onChange={e => setMinMileage(e.target.value)}
          />
          <InputTo
            type="number"
            placeholder="To"
            value={maxMileage}
            onChange={e => setMaxMileage(e.target.value)}
          />
        </ContainerInputDiv>
      </ContainerDiv>

      <FormBtn type="submit" onClick={handleFilter} disabled={false}>
        Search
      </FormBtn>
    </FilterContainerDiv>
  );
};

export default Filter;
