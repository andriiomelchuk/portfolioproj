import axios from "axios";
import {MOVIE_API_LINK, API_KEY} from "./constants";

export default axios.create({
    baseURL: `${MOVIE_API_LINK}apikey=${API_KEY}&s=matrix`,
    headers: {'Accept': 'application/JSON'}
});