import '../../Pages/Movies/movies.less'
import Input from "../Input";

import {useDispatch, useSelector} from "react-redux";
import {addMovieName} from "../../store/moviesSlice";
import {useState} from "react";
import Filters from "./Filters";

const Search = () => {

    const movieLength = useSelector(state => state.movies.movies.length)
    const dispatch = useDispatch();

    const [moviesName, setMoviesName] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addMovieName({moviesName}))
        setMoviesName('');
    }


    return (
        <>
            <Input text={moviesName} setText={setMoviesName} handleSubmit={handleSubmit} buttonText={'Search'} placeholder={'Search...'}/>
            {movieLength ? <Filters/>: null}
        </>
    )
}

export default Search;

