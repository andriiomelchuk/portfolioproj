import Card from '../../Components/Card'
import {useDispatch, useSelector} from "react-redux";
import moviesReducer from "../../store/movies/reducer";
import {fetchMoviesThunk} from "../../store/movies/thunk";
import {useEffect} from "react";

const MoviesList = () => {
    const  moviesList = useSelector((state) => state.moviesReducer)
    const dispatch = useDispatch();

    console.log(moviesList.movies[0])

    useEffect(() => {
        dispatch(fetchMoviesThunk());
    }, [dispatch])

    return (
        <Card moviesList={moviesList.movies[0]}/>
    )
}

export default MoviesList