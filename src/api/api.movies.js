import axios from "axios";
import { API_KEY } from "./constants";


const handleError = (error) => console.error(error);

export const fetchMovieList = (name) => {
    const encodeURI = window.encodeURI(`http://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=${name}`);
    return axios.get(encodeURI)
        .then(response => response.data.Search)
        .catch(handleError)
}

export const fetchMoviesType = (movieType, name) => {
    const encodeURI = window.encodeURI(`http://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&type=${movieType !== 'all' ? movieType : ''}&s=${name}`);
    return axios.get(encodeURI)
        .then(response => response.data.Search)
        .catch(handleError)

}
