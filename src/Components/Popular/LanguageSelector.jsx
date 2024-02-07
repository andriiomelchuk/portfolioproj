import PopularList from "./PopularList";
import {useEffect, useState} from "react";
import './Popular.css'
import {fetchPopularRepos} from "../../api/api.github";
import CircularIndeterminate from "../Loader/Loader";
import {languagesArr} from "../../api/constants";
import {useSearchParams} from "react-router-dom";


const LanguageSelector = () => {

    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();
    const searchParam = searchParams.get('lang');
    const [newLang, setNewLang] = useState('');
    const [languages, SetLanguages] = useState(languagesArr);

    /*console.log(repos[0].language)*/



    const addLang = (event) => {
        event.preventDefault();
        if (newLang) {
            languages.push(newLang);
            SetLanguages(languages);
            setSearchParams('lang=' + newLang);
        }
        console.log(languages)
    }

    useEffect(() => {
        setLoading(true);
        fetchPopularRepos(searchParam)
            .then(repos => setRepos(repos.data.items))
            .catch(error => setError(error))
            .finally(() => setLoading(false))
    }, [searchParam])

/*    useEffect(() => {
        if (searchParam || searchParam !== 'all'){
            console.log('work', searchParam)
        }
    }, [])*/

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
                    <form action="" onSubmit={addLang}>
                        <input
                            type="text"
                            placeholder='enter your language'
                            value={newLang}
                            onChange={(event) => setNewLang(event.target.value)}/>
                        <button>Add new lang</button>
                    </form>
                </li>
            </ul>
            <ul className='popularList'>
                <PopularList repos={repos}/>
            </ul>
        </>
    )
}

export default LanguageSelector;