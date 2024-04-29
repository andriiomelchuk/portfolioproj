import {useState} from "react";
import {useDispatch} from "react-redux";
import {addPlayer} from "../../store/battleSlice";

const PlayerInput = ({id, label}) => {
    const dispatch = useDispatch();
    const [userName, setUserName] = useState('');


    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addPlayer({id, userName}));
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
                <button className="button" disabled={!userName.length}>Search player</button>
            </form>
        </>

    )
}

export default PlayerInput;