import {useState} from "react";

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
            <form action="" onSubmit={addLang}>
                <input
                    type="text"
                    placeholder='enter your language'
                    value={newLang}
                    onChange={(event) => setNewLang(event.target.value)}/>
                <button>Add new lang</button>
            </form>
        </>
    )
}

export default AddNewLang;