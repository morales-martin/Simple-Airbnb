import axios from "axios";
import env from "react-dotenv";

export async function SearchPropertyByPlace(id, checkin, checkout, guests) {
  const options = {
    method: "GET",
    url: `${env.API_URL}searchPropertyByPlace`,
    params: {
      id: id,
      checkin: checkin,
      checkout: checkout,
      adults: guests,
    },
    headers: {
      "X-RapidAPI-Key": env.API_KEY,
      "X-RapidAPI-Host": "airbnb19.p.rapidapi.com",
    },
  };

  return axios
    .request(options)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.error(error);
    });
}

export async function SearchProperty(location) {
  const options = {
    method: "GET",
    url: `${env.API_URL}searchDestination`,
    params: { query: location },
    headers: {
      "X-RapidAPI-Key": env.API_KEY,
      "X-RapidAPI-Host": "airbnb19.p.rapidapi.com",
    },
  };
  return axios
    .request(options)
    .then((response) => {
      return response.data.data[0].id;
    })
    .catch(function (error) {
      console.error(error);
    });
}
