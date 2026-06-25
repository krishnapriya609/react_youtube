import axios from "axios";
import { API_KEY } from "./constants";

const BASE_URL = "https://www.googleapis.com/youtube/v3";

export const fetchFromAPI = async (endpoint) => {
  const { data } = await axios.get(
    `${BASE_URL}/${endpoint}&key=${API_KEY}`
  );

  return data;
};