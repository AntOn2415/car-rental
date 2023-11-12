import { fetchCarAll } from "../service/CatalogCarsApi";

let allCarsData;

async function getAllCarsData() {
  if (!allCarsData) {
    try {
      allCarsData = await fetchCarAll();
    } catch (error) {
      console.error("Error fetching all cars:", error);
      throw error;
    }
  }
  return allCarsData;
}

export async function fetchCarMakesList() {
  try {
    const allCars = await getAllCarsData();
    const allMakes = allCars.map(advertisement => advertisement.make);
    const makesList = [...new Set(allMakes)].sort();

    return makesList;
  } catch (error) {
    throw error;
  }
}

export async function fetchCarPricesList() {
  try {
    const allCars = await getAllCarsData();
    const allPrices = allCars.map(advertisement => {
      const price = parseInt(advertisement.rentalPrice.replace("$", ""), 10);
      return Math.floor(price / 10) * 10;
    });
    const pricesList = [...new Set(allPrices)].sort((a, b) => a - b);

    return pricesList;
  } catch (error) {
    throw error;
  }
}

export async function fetchUniqueCities() {
  try {
    const allCars = await getAllCarsData();
    const uniqueCities = [
      ...new Set(allCars.map(advertisement => advertisement.address.split(", ")[1])),
    ];

    return uniqueCities;
  } catch (error) {
    console.error("Error fetching unique cities:", error);
    throw error;
  }
}

export async function fetchCatalogCarsFiltered(page, perPage, filterData) {
  try {
    const allCars = await getAllCarsData();
    let filteredCars = [...allCars];

    if (filterData.city) {
      const city = filterData.city;
      filteredCars = filteredCars.filter(advertisement => advertisement.address.includes(city));
    }

    if (filterData.make) {
      filteredCars = filteredCars.filter(
        advertisement => advertisement.make === filterData.make.value
      );
    }

    if (Array.isArray(filterData.price) && filterData.price.length === 1) {
      const selectedPrice = filterData.price[0];
      const priceRange = {
        min: selectedPrice,
        max: selectedPrice + 10,
      };
      filteredCars = filteredCars.filter(advertisement => {
        const price = parseInt(advertisement.rentalPrice.replace("$", ""), 10);
        return price >= priceRange.min && price <= priceRange.max;
      });
    } else if (Array.isArray(filterData.price) && filterData.price.length >= 2) {
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
