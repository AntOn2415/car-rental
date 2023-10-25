import { fetchCarAll } from "../service/CatalogCarsApi";

export async function fetchCarMakes() {
  try {
    const allCars = await fetchCarAll();
    const allMakes = allCars.map(advertisement => advertisement.make);
    const uniqueMakes = [...new Set(allMakes)].sort();

    return uniqueMakes;
  } catch (error) {
    throw error;
  }
}

export async function fetchCarPrices() {
  try {
    const allCars = await fetchCarAll();
    const allPrices = allCars.map(advertisement => {
      const price = parseInt(advertisement.rentalPrice.replace("$", ""), 10);
      return Math.floor(price / 10) * 10;
    });

    const uniquePrices = [...new Set(allPrices)].sort((a, b) => a - b);

    return uniquePrices;
  } catch (error) {
    throw error;
  }
}

export async function fetchCatalogCars(page, perPage, filterData) {
  try {
    const allCars = await fetchCarAll();
    let filteredCars = allCars;

    if (filterData.make) {
      filteredCars = filteredCars.filter(advertisement => advertisement.make === filterData.make);
    }

    if (filterData.price) {
      const priceRange = {
        min: filterData.price,
        max: filterData.price + 10,
      };

      filteredCars = filteredCars.filter(advertisement => {
        const price = parseInt(advertisement.rentalPrice.replace("$", ""), 10);
        return price >= priceRange.min && price < priceRange.max;
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
