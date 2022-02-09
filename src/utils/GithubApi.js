import axios from "axios";

export const API_KEY=process.env.REACT_APP_OMDB_API_KEY;
export default axios.create({
    baseURL:"https://api.github.com/"
})