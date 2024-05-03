import '../../Pages/Popular/Popular.less'
import AddNewLang from "./AddNewLang";
import {useEffect, useState} from "react";
import {languagesArr} from "../../api/constants";


const LanguageSelector = ({searchParam, setSearchParams}) => {

    const [languages, setLanguages] = useState(languagesArr);

    useEffect(() => {
        if (searchParam && !languages.map(e => e.toLowerCase()).includes(searchParam)) {
            languages.push(searchParam);
        }
    }, [searchParam, languages])

    return (
        <>
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
        </>
    )
}

export default LanguageSelector;