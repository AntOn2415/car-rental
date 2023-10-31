import { fetchCarAll } from "../service/CatalogCarsApi";

let allCarsData = null;
let makesList = null;
let pricesList = null;

async function getAllCarsData() {
  if (!allCarsData) {
    allCarsData = await fetchCarAll();
  }
  return allCarsData;
}

export async function fetchCarMakesList() {
  try {
    if (!makesList) {
      const allCars = await getAllCarsData();
      const allMakes = allCars.map(advertisement => advertisement.make);
      makesList = [...new Set(allMakes)].sort();
    }

    return makesList;
  } catch (error) {
    throw error;
  }
}

export async function fetchCarPricesList() {
  try {
    if (!pricesList) {
      const allCars = await getAllCarsData();
      const allPrices = allCars.map(advertisement => {
        const price = parseInt(advertisement.rentalPrice.replace("$", ""), 10);
        return Math.floor(price / 10) * 10;
      });
      pricesList = [...new Set(allPrices)].sort((a, b) => a - b);
    }

    return pricesList;
  } catch (error) {
    throw error;
  }
}

export async function fetchCatalogCarsFiltered(page, perPage, filterData) {
  try {
    const allCars = await fetchCarAll();
    let filteredCars = [...allCars];

    if (filterData.make) {
      filteredCars = filteredCars.filter(advertisement => advertisement.make === filterData.make);
    }

    if (filterData.price.length === 1) {
      const selectedPrice = filterData.price[0];
      const priceRange = {
        min: selectedPrice,
        max: selectedPrice + 10,
      };
      filteredCars = filteredCars.filter(advertisement => {
        const price = parseInt(advertisement.rentalPrice.replace("$", ""), 10);
        return price >= priceRange.min && price <= priceRange.max;
      });
    } else if (filterData.price.length >= 2) {
      const minPrice = Math.min(...filterData.price);
      const maxPrice = Math.max(...filterData.price);
      const priceRange = {
        min: minPrice,
        max: maxPrice,
      };
      filteredCars = filteredCars.filter(advertisement => {
        const price = parseInt(advertisement.rentalPrice.replace("$", ""), 10);
        return price >= priceRange.min && price <= priceRange.max;
      });
    }

    if (filterData.minMileage) {
      filteredCars = filteredCars.filter(
        advertisement => advertisement.mileage >= filterData.minMileage
      );
    }
    if (filterData.maxMileage) {
      filteredCars = filteredCars.filter(
        advertisement => advertisement.mileage <= filterData.maxMileage
      );
    }

    const startIndex = (page - 1) * perPage;
    const endIndex = startIndex + perPage;
    const data = filteredCars.slice(startIndex, endIndex);
    return data;
  } catch (error) {
    console.error("Error during filtering:", error);
    throw error;
  }
}
