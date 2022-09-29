import axios from "axios";

const API_BASE_URL = "http://localhost:3001/api/v1";

const SEARCH_BASE_URL = `/product`;

export const getManga = async () => {
   try {
      const {data: resp} = await axios.get(`${API_BASE_URL}${SEARCH_BASE_URL}`);
      return {data: resp.data || [], success: true};
   } catch (error) {
      console.log("WinLog 🐳🐳🐳 ~ error", error);
      return {data: [], success: false};
   }
};
