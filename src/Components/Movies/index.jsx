import MoviesList from "./MoviesList";
import Search from "./Search";
import {useEffect} from "react";
import {fetchMoviesThunk} from "../../store/moviesSlice";
import {useDispatch, useSelector} from "react-redux";



const Movies = () => {

    const dispatch = useDispatch();
    const movieName = useSelector(state => state.movies.movieName);
    const movieType = useSelector(state => state.movies.movieType);



    useEffect(() => {
        dispatch(fetchMoviesThunk({movieName, movieType}))
        console.log(movieName)
    }, [movieName, movieType, dispatch])

    return (
        <>
            <Search/>
            <MoviesList/>
        </>
    )
}

export default Movies;