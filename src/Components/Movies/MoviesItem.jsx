import {useSelector} from "react-redux";

const MoviesItem = () => {
    const movies = useSelector(state => state.movies.movies);

    return (
        <>
            {movies.map((movie) => {
                return <div className='item four-block' key={movie.imdbID}>
                    <div>{movie.Title}</div>
                    <div>{movie.Type}</div>
                    <img src={movie.Poster} alt=""/>
                </div>
            })}
        </>
    )
}

export default MoviesItem