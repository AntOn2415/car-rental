import axios from "axios";

const baseURL = "https://64aaeb660c6d844abedefc09.mockapi.io";
const perPage = 8;
async function fetchCatalogCars(page) {
  try {
    const response = await axios.get(`${baseURL}/adverts`, {
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
    const response = await axios.get(`${baseURL}/adverts`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export { fetchCatalogCars, fetchCarAll };
export { perPage };
