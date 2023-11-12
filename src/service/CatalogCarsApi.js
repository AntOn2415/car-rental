import axios from "axios";

// const baseURL = "https://64aaeb660c6d844abedefc09.mockapi.io";
const perPage = 8;
const baseURL = new URL("https://64aaeb660c6d844abedefc09.mockapi.io/adverts");

async function fetchCatalogCars(page) {
  try {
    const response = await axios.get(baseURL.toString(), {
      params: {
        completed: false,
        page: page,
        limit: perPage,
      },
    });

    return response.data;
  } catch (error) {
    throw error;
  }
}

async function fetchCarAll() {
  try {
    const response = await axios.get(baseURL.toString());
    return response.data;
  } catch (error) {
    throw error;
  }
}

export { perPage, fetchCarAll, fetchCatalogCars };
