import PopularList from "./PopularList";
import {useEffect, useState} from "react";
import './Popular.less'
import {fetchPopularRepos} from "../../api/api.github";
import CircularIndeterminate from "../Loader/Loader";
import {languagesArr} from "../../api/constants";
import {useSearchParams} from "react-router-dom";
import AddNewLang from "./AddNewLang";


const LanguageSelector = () => {

    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();
    const searchParam = searchParams.get('lang');
    const [languages, setLanguages] = useState(languagesArr);


    useEffect(() => {
        setLoading(true);
        fetchPopularRepos(searchParam)
            .then(repos => setRepos(repos.data.items))
            .catch(error => setError(error))
            .finally(() => setLoading(false));

    }, [searchParam])

    useEffect(() => {
        if(searchParam && !languages.map(e => e.toLowerCase()).includes(searchParam)){
            languages.push(searchParam);
        }
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
                <li className='addLangField'>
                    <AddNewLang languages={languages} setLanguages={setLanguages} setSearchParams={setSearchParams}/>
                </li>
            </ul>
            <ul className='popularList'>
                <PopularList repos={repos}/>
            </ul>
        </>
    )
}

export default LanguageSelector;