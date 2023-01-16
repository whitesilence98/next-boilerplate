import {BASE_URL} from "@constants";

import axios from "axios";

// const API_BASE_URL = "https://api.jikan.moe/v4";
// const SEARCH_BASE_URL = `/anime`;

const SEARCH_BASE_URL = `${BASE_URL}/product`;

export const getAnime = async () => {
   try {
      const {data: resp} = await axios.get(`${SEARCH_BASE_URL}`);
      console.log("🐳 Win -> data", resp);
      return {data: resp.data || [], success: true};
   } catch (error) {
      console.log("🐳 Win -> error", error);
      return {data: [], success: false};
   }
};
