import {useState} from "react";
import Input from "../Input";


const AddNewLang = ({languages, setLanguages, setSearchParams}) => {

    const [newLang, setNewLang] = useState('');


    const addLang = (event) => {
        event.preventDefault();
        if (newLang) {
            if (!compareLang(languages.map(e => e.toLowerCase()), newLang)) {
                languages.push(newLang);
                setLanguages(languages);
                setSearchParams('lang=' + newLang.toLowerCase());
            } else {
                setSearchParams('lang=' + newLang.toLowerCase());
            }

        }
    }

    const compareLang = (languages, newLang) => {
        return languages.includes(newLang.toLowerCase());
    }

    return (
        <>
            <Input text={newLang} setText={setNewLang} handleSubmit={addLang} buttonText={'Add new lang'} placeholder={'Enter language'}/>
        </>
    )
}

export default AddNewLang;