import React from "react";
import { CitySelectDiv, Label, Select } from "./CitySelect.styled";

const CitySelect = () => {
  return (
    <CitySelectDiv>
      <Label htmlFor="city-select">Select a City</Label>
      <Select id="city-select">
        <option value="Kyiv">Kyiv</option>
        <option value="Lviv">Lviv</option>
        <option value="Odessa">Odessa</option>
      </Select>
    </CitySelectDiv>
  );
};

export default CitySelect;
