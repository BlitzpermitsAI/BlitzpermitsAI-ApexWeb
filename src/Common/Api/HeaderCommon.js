import axios from "axios";
 const token="";
 const apiUrl = process.env.REACT_APP_BLITZ_API_BASE_URL;
 console.log("apiURL ***********    " + apiUrl);

export default axios.create({
  baseURL:apiUrl,
  headers: {
    "Content-type": "application/json",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "*",
    "Authorization": `Bearer ${token}`,
  }
});