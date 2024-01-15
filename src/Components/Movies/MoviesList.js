import {useEffect, useState} from "react";
import {fetchMovieList} from "../../api/movies";
import Search from "./Search";
import * as PropTypes from "prop-types";
import './movies.css'
import axios from "axios";
import {API_KEY} from "../../api/constants";


function Item(props) {
    return null;
}

Item.propTypes = {children: PropTypes.node};
const MoviesList = () => {

    const [moviesName, setMoviesName] = useState('');
    const [searchType, setSearchType] = useState('');
    const [movies, setMovies] = useState({});


        const handleSubmit = (event) => {
        event.preventDefault();
        fetchMovieList(moviesName).then(moviesData => setMovies(moviesData));
    }

    const handleFilter = (movieType) => {
        setSearchType(movieType);
        const encodeURI = window.encodeURI(`http://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&type=${movieType !== 'all' ? movieType : ''}&s=${moviesName}`);
        axios.get(encodeURI)
            .then(response => {
                return setMovies(response.data.Search);
            })
    }



    return (
        <>
            <Search
                handleSubmit={handleSubmit}
                setMoviesName={setMoviesName}
                moviesName={moviesName}
                setMovies={setMovies}
                handleFilter={handleFilter}
                leng={movies.length}
            />

            {movies.length ?
                <div className='movieslList'>
                    {movies.map((mov) => {
                        return <div className='item four-block' key={mov.imdbID}>
                            <div>{mov.Title}</div>
                            <div>{mov.Type}</div>
                            <img src={mov.Poster} alt=""/>
                        </div>
                    })}
                </div>
                : null}


        </>
    )
}

export default MoviesList