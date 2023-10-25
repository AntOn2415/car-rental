import axios from "axios";

const baseURL = "https://64aaeb660c6d844abedefc09.mockapi.io";
const perPage = 8;

async function fetchCarAll() {
  try {
    const response = await axios.get(`${baseURL}/adverts`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export { fetchCarAll };
export { perPage };
