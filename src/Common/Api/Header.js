import axios from "axios";
 const token="";
 const apiUrl = "";
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