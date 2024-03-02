import './movies.less'

const Search = ({handleSubmit, handleFilter, setMoviesName, moviesName, leng}) => {

    return (
        <>
        <form className='searchForm' onSubmit={handleSubmit}>
                <input type="text" placeholder='search...' value={moviesName}
                       onChange={(event) => setMoviesName(event.target.value)}/>
                <button disabled={!moviesName.length}>Search</button>
        </form>
            {leng ?
                <div className='filterBlock'>
                    <p>Filters:</p>
                    <ul className='typeBlock'>
                        <li className="itemBlock" onClick={() => handleFilter('all')} checked={'all'}>
                            <span>All</span>
                        </li>
                        <li className="itemBlock" onClick={() => handleFilter('movie')} checked={'movie'}>
                            <span>Movie</span>
                        </li>
                        <li className="itemBlock" onClick={() => handleFilter('series')} checked={'series'}>
                            <span>Series</span>
                        </li>
                        <li className="itemBlock" onClick={() => handleFilter('game')} checked={'game'}>
                            <span>Game</span>
                        </li>
                    </ul>
                </div> : null}
        </>
    )
}

export default Search;

