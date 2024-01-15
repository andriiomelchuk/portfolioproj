import PopularList from "./PopularList";
import {useEffect, useState} from "react";
import './Popular.css'

const LanguageSelector = () => {

    const languages = ['All', 'Javascript', 'Java', 'Ruby', 'Python', 'CSS'];
    const [selectedLanguageIndex, setSelectedLanguageIndex] = useState(0);

    console.log(selectedLanguageIndex);

    return (
        <>
            <ul className='languages'>
                {languages.map((lang, index) => (
                    <li
                        key={index}
                        style={{color: index === selectedLanguageIndex ? `#d0021b` : `#ffffff` }}
                        onClick={() => setSelectedLanguageIndex(index)}
                    >
                        {lang}
                    </li>
                ))}
            </ul>

            <PopularList />
        </>
    )
}

export default LanguageSelector;