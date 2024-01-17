import PopularList from "./PopularList";
import {useEffect, useState} from "react";
import './Popular.css'
import {fetchPopularRepos} from "../../api/api.github";
import CircularIndeterminate from "../Loader/Loader";
import {languages} from "../../api/constants";
import {useLocation, useSearchParams} from "react-router-dom";


const LanguageSelector = () => {

    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();
    const searchParam = searchParams.get('lang');

    useEffect(() => {
        setLoading(true);
        fetchPopularRepos(searchParam)
            .then(repos => setRepos(repos.data.items))
            .catch(error => setError(error))
            .finally(() => setLoading(false))
    }, [searchParam])

    if (loading) {
        return <CircularIndeterminate/>
    }

    if (error) {
        return <p>Error</p>
    }

    return (
        <>
            <ul className='languages'>
                {languages.map((lang, index) => (
                    <li
                        key={index}
                        style={{color: lang.toLowerCase() === searchParam ? `#d0021b` : `#ffffff`}}
                        onClick={() => setSearchParams('lang=' + lang.toLowerCase())}
                    >
                        {lang}
                    </li>
                ))}
            </ul>
            <ul className='popularList'>
                <PopularList repos={repos}/>
            </ul>
        </>
    )
}

export default LanguageSelector;