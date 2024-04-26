import axios from "axios";
import { API_KEY } from "./constants";


const handleError = (error) => console.error(error);

export const fetchMovieList = (moviesName ,movieType) => {
    if(movieType){
        const encodeURI = window.encodeURI(`http://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&type=${movieType === 'all' ?  '' : movieType}&s=${moviesName}`);
        return axios.get(encodeURI)
            .then(response => response.data.Search)
            .catch(handleError)
    }else{
        const encodeURI = window.encodeURI(`http://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=${moviesName}`);
        return axios.get(encodeURI)
            .then(response => response.data.Search)
            .catch(handleError)
    }


}
