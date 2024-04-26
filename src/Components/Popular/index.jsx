import {useEffect} from "react";
import {useSearchParams} from "react-router-dom";
import PopularList from "./PopularList";
import LanguageSelector from "./LanguageSelector";
import CircularIndeterminate from "../Loader/Loader";
import {useDispatch, useSelector} from "react-redux";
import {fetchPopular} from "../../store/popularSlice";

const Popular = () => {

    const dispatch = useDispatch();
    const {status, error} = useSelector(state => state.popular)
    const [searchParams, setSearchParams] = useSearchParams();
    const searchParam = searchParams.get('lang');


    useEffect(() => {
        if (!searchParams.get('lang')){
            setSearchParams('lang=' + 'all');
        }
            dispatch(fetchPopular(searchParam))
    }, [searchParams, searchParam, dispatch])

    return (
        <>
            <ul className='languages'>
                <LanguageSelector searchParam={searchParam} setSearchParams={setSearchParams}/>
            </ul>

            {status === 'loading' ?? <CircularIndeterminate/>}

            <h2  className='error'>{error ?? <h2> {error}</h2>}</h2>

            <ul className='popularList'>
                <PopularList/>
            </ul>
        </>
    )

}

export default Popular;