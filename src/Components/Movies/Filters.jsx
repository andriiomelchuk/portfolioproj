import {movieTypes} from "../../api/constants";
import {addMovieType} from "../../store/moviesSlice";
import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";

const Filters = () => {

    const dispatch = useDispatch();
    const movieName = useSelector(state => state.movies.movieName);

    const [searchParams, setSearchParams] = useSearchParams();

    const addType = (type) => {
        dispatch(addMovieType({type}));
        setSearchParams('name=' + movieName + '&type=' + type);
    }

    return (
        <>
            <div className='filterBlock'>
                <p>Filters:</p>
                <ul className='typeBlock'>
                    {movieTypes.map((type, index) => (
                        <li
                            key={index}
                            className="itemBlock"
                            onClick={() => addType(type)}
                            checked={type}>
                            <span>{type}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Filters;