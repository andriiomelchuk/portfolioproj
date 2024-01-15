import {movies} from "../../api/moviesService";
import {fetchMoviesAction} from "./actions";


export const fetchMoviesThunk = () => {
    return (dispatch) => {
        movies.get().then((movies) => dispatch(fetchMoviesAction(movies)))
    }
}