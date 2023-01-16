import axios from "axios";
import _get from "lodash/get";

const MESSAGE_LOGIN_FAILED = "Login failed";
const MESSAGE_TOKEN_EXPIRED = "Token expired. Please try again!";
// const MESSAGE_SERVER_ERROR = "Internal Server Error";

const instance = axios.create({
   baseURL: "http://localhost:3000/api/v1",
   withCredentials: false,
});

function formatResponse(response: any) {
   return response.data;
}
export function handleDataError(error: any) {
   let message;
   if (error.response) {
      if (error.response.status === 401) {
         message = error.response.status === 401 ? MESSAGE_LOGIN_FAILED : MESSAGE_TOKEN_EXPIRED;
      } else if (error.response.status === 500) {
         // message = MESSAGE_SERVER_ERROR;
         message = _get(error.response.data, "errors.message");
         console.log("🐳 Win -> error", error);
      } else {
         message = _get(error.response.data, "errors.message");
         console.log("🐳 Win -> error", error);
      }
   }

   // if (!message || message.length < 1) {
   //    return {message: "Oops, something went wrong"};
   // }

   return {message};
}

instance.interceptors.request.use(
   config => {
      const configHeaders = config.headers;
      config.headers = {
         ...configHeaders,
         "Access-Control-Allow-Origin": "*",
         "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
      };
      return config;
   },
   error => {
      return Promise.reject(error);
   },
);

instance.interceptors.response.use(
   response => {
      return formatResponse(response);
   },
   error => {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      if (error.response && error.response.status === 401) {
         // window.location = '/sign-in'
         if (window && localStorage !== undefined) localStorage.clear();
         console.clear();
      }
      if (error.response && error.response.status === 404) {
         // window.location = '/forbidden'
      }

      return Promise.reject(handleDataError(error));
   },
);

export default instance;
