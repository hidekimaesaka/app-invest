import axios from "axios";

const api = axios.create({
    baseURL: "https://app-invest-api.herokuapp.com/"
});

export default api;