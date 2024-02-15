import {useState} from "react";

const PlayerInput = ({id, label, onSubmit}) => {

    const [userName, setUserName] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(id, userName);
        console.log(userName);
    }

    return (
        <>
            <form className="playerForm" onSubmit={handleSubmit}>
                <label className="userNameHeader" htmlFor={label}>{label}</label>
                <input
                    type="text"
                    id={label}
                    placeholder="Github Username"
                    autoComplete="off"
                    value={userName}
                    onChange={(event) => setUserName(event.target.value)}
                />
                <button className="button" disabled={!userName.length}>Submit</button>
            </form>
        </>

    )
}

export default PlayerInput;