import { useEffect, useState } from "react";
import Select from "react-select";
import { useCity } from "hooks/CityProvider";
import { fetchUniqueCities } from "helpers/filters";
import { customSelectCityStyles } from "helpers/customSelectStyles";
import iconChevron from "images/icons.svg";
import { CitySelectDiv, Label, ContainerSvg } from "./CitySelect.styled";

const CitySelect = () => {
  const { selectedCity, setCity } = useCity();
  const [uniqueCities, setUniqueCities] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const cities = await fetchUniqueCities();
        setUniqueCities(cities);
      } catch (error) {
        console.error("Error fetching cities:", error);
      }
    };

    fetchCities();
  }, []);

  const handleCityChange = selectedOption => {
    setCity(selectedOption.value);
  };

  const options = uniqueCities.map(city => ({
    value: city,
    label: city,
  }));

  const selectedOption = options.find(option => option.value === selectedCity);

  return (
    <CitySelectDiv>
      <Label htmlFor="city-select">Select a City</Label>
      <Select
        id="city-select"
        value={selectedOption}
        onChange={handleCityChange}
        placeholder="Select city"
        options={[{ value: "", label: "Any city" }, ...options]}
        styles={customSelectCityStyles}
        onMenuOpen={() => setIsMenuOpen("city-select")}
        onMenuClose={() => setIsMenuOpen(false)}
      />
      <ContainerSvg data-is-active={isMenuOpen === "city-select"}>
        <svg width="20" height="20">
          <use href={`${iconChevron}#icon-chevron`} />
        </svg>
      </ContainerSvg>
    </CitySelectDiv>
  );
};

export default CitySelect;
