import './movies.less'
import Input from "../Input";

const Search = ({handleSubmit, handleFilter, setMoviesName, moviesName, leng}) => {

    return (
        <>
            <Input text={moviesName} setText={setMoviesName} handleSubmit={handleSubmit} buttonText={'Search'} placeholder={'Search...'}/>
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

