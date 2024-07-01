
import axios from "axios";
 const token="";
 const apiUrl = process.env.REACT_APP_BLITZ_API_BASE_URL;
 console.log("apiURL ***********    " + apiUrl);

 const http = axios.create({
  baseURL:apiUrl,
  headers: {
    "Content-type": "application/json",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "*",
    "Authorization": `Bearer ${token}`,
  }
});

http.interceptors.response.use(
  response => response, // If the response is successful, just return the response
  error => {
    // Handle the error
    if (error.response) {
      // Server responded with a status other than 2xx
      console.error(`Error: ${error.response.status} - ${error.response.statusText}`);
    } else if (error.request) {
      // No response was received from the server
      console.error('Error: No response received from the server');
    } else {
      // Something else went wrong in setting up the request
      console.error(`Error: ${error.message}`);
    }
    return Promise.reject(error); // Always return a rejected promise to handle it in the component
  }
);

export default http;