import PopularList from "./PopularList";
import {useEffect, useState} from "react";
import './Popular.css'
import {fetchPopularRepos} from "../../api/api.github";
import CircularIndeterminate from "../Loader/Loader";
import { languages } from "../../api/constants";
import {useLocation, useSearchParams} from "react-router-dom";


const LanguageSelector = () => {

    const location = useLocation();
    const [selectedLanguageIndex, setSelectedLanguageIndex] = useState(0);
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams('lang=' + 'all');

    const searchParm = new URLSearchParams(location.search);

    console.log(searchParm.get('lang'), 'search')

    useEffect(() => {
        setLoading(true);
        fetchPopularRepos(languages[selectedLanguageIndex])
            .then(repos => setRepos(repos.data.items))
            .catch(error => setError(error))
            .finally(() => setLoading(false))
    }, [searchParams])

    if (loading) {
        return <CircularIndeterminate />
    }

    if (error) {
        return <p>Error</p>
    }

    const handleSearch = (lang, index) => {
        setSelectedLanguageIndex(index)
        setSearchParams('lang=' + lang.toLowerCase());
    }
    return (
        <>
            <ul className='languages'>
                {languages.map((lang, index) => (
                    <li
                        key={index}
                        style={{color: index === selectedLanguageIndex ? `#d0021b` : `#ffffff`}}
                        onClick={() => handleSearch(lang, index)}
                    >
                        {lang}
                    </li>
                ))}
            </ul>
            <ul className='popularList'>
                <PopularList  repos={repos}/>
            </ul>
        </>
    )
}

export default LanguageSelector;