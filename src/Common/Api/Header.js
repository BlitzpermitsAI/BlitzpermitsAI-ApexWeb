import axios from "axios";
 const token="";
 const apiUrl = process.env.REACT_APP_API_URL;
export default axios.create({
  baseURL:apiUrl,
  headers: {
    "Content-type": "multipart/form-data",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "*",
  
  }
});