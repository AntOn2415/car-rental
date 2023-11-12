import React, { createContext, useContext, useState, useEffect } from "react";

const CityContext = createContext();

export const CityProvider = ({ children }) => {
  const initialCity = localStorage.getItem("selectedCity") || "";
  const [selectedCity, setSelectedCity] = useState(initialCity);

  const setCity = city => {
    setSelectedCity(city);
  };

  useEffect(() => {
    localStorage.setItem("selectedCity", selectedCity);
  }, [selectedCity]);

  return <CityContext.Provider value={{ selectedCity, setCity }}>{children}</CityContext.Provider>;
};

export const useCity = () => {
  const context = useContext(CityContext);
  if (!context) {
    throw new Error("useCity must be used within a CityProvider");
  }
  return context;
};
