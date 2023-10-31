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

// async function fetchCatalogCarsByModel(make) {
//   try {
//     // baseURL.searchParams.append("make", make);
//     // baseURL.searchParams.append();

//     const response = await axios.get(baseURL.toString(), {
//       params: {
//         completed: false,
//         sortby: make,
//         order: "desc",
//       },
//     });

//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// }

// console.log(fetchCatalogCarsByModel());

// async function fetchCatalogCarsByPrice(price) {
//   try {
//     baseURL.searchParams.append("rentalPrice", price);

//     const response = await axios.get(baseURL.toString(), {
//       params: {
//         completed: false,
//         rentalPrice: "rentalPrice",
//         order: "desc",
//       },
//     });

//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// }
// console.log(fetchCatalogCarsByPrice("300"));

// async function fetchCatalogCarsByModelAndPrice(make, price) {
//   try {
//     const params = new URLSearchParams();
//     params.append("make", make);
//     params.append("rentalPrice", price);
//     params.append("completed", "false");

//     const response = await axios.get(`${baseURL}?${params.toString()}`);

//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// }

// // Приклад використання
// fetchCatalogCarsByModelAndPrice("BMW", "300")
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.error(error);
//   });

async function fetchCarAll() {
  try {
    const response = await axios.get(baseURL.toString());
    return response.data;
  } catch (error) {
    throw error;
  }
}

export { perPage, fetchCarAll, fetchCatalogCars };
