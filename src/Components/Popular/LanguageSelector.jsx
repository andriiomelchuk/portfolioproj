import PopularList from "./PopularList";
import {useEffect, useState} from "react";
import './Popular.css'
import {fetchPopularRepos} from "../../api/api.github";
import CircularIndeterminate from "../Loader/Loader";
import { languages } from "../../api/constants";


const LanguageSelector = () => {

    const [selectedLanguageIndex, setSelectedLanguageIndex] = useState(0);
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        setLoading(true)
        fetchPopularRepos(languages[selectedLanguageIndex])
            .then(repos => setRepos(repos.data.items))
            .catch(error => setError(error))
            .finally(() => setLoading(false))
    }, [selectedLanguageIndex])

    if (loading) {
        return <CircularIndeterminate />
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
                        style={{color: index === selectedLanguageIndex ? `#d0021b` : `#ffffff`}}
                        onClick={() => setSelectedLanguageIndex(index)}
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