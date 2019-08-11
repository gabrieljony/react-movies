import axios from "axios";
//http://www.omdbapi.com/?apikey=477f8be0&s='star'
//http://www.omdbapi.com/?apikey=477f8be0&i=${param.imdbID}
const api = axios.create({
  baseURL: "https://www.omdbapi.com/",
  client_id: "",
  client_secret: ""
});

export default api;
