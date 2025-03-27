import axios from "axios";
import { ENV_VARS } from "../config/envVars.js";

export const fetchFromTMDB = async (url) => {
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": ENV_VARS.RAPID_API_KEY,
      "x-rapidapi-host": "moviesdatabase.p.rapidapi.com",
    },
  };

  const response = await axios.get(url, options);

  if (response.status !== 200) {
    throw new Error("Failed to fetch data from TMDB" + response.statusText);
  }

  return response.data;
};
