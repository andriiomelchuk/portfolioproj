import Movies from "../../Components/Movies/index";
import  './movies.less';

const MoviesPage = () => {


    return(

        <div className='moviePage'>
            Enter movies name
            <br/>
            <Movies />
        </div>
    )
}

export default MoviesPage;