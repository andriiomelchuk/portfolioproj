const MoviesItem = ({movies}) => {
    return (
        <>
            {movies.map((mov) => {
                return <div className='item four-block' key={mov.imdbID}>
                    <div>{mov.Title}</div>
                    <div>{mov.Type}</div>
                    <img src={mov.Poster} alt=""/>
                </div>
            })}
        </>
    )
}

export default MoviesItem