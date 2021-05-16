import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_KEY || "http://localhost:3001/",
  headers:{
    "content-type": "application/json",
    "Accept": "application/json"
  }
});

export default instance