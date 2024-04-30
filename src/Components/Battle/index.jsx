import PlayerPreview from "./PlayerPreview";
import PlayerInput from "./PlayerInput";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {resetPlayer} from "../../store/battleSlice";

const Players = () => {

    const dispatch = useDispatch();
    const {
        playerOneName,
        playerTwoName,
        playerOneImage,
        playerTwoImage,
        playerOneId,
        playerTwoId,
        error
    } = useSelector(state => state.battle)

    const handleReset = (id) => {
        dispatch(resetPlayer({id}))
    }

    return (
        <div className="battle">
            <div className='battleBody container'>
                {playerOneImage ?
                    <PlayerPreview
                        avatar={playerOneImage}
                        userName={playerOneName}
                    >
                        <button className='reset' onClick={() => handleReset(playerOneId)}>Reset</button>
                    </PlayerPreview> :
                    <PlayerInput label={playerOneId} id={playerOneId}/>
                }
                {playerTwoImage ?
                    <PlayerPreview
                        avatar={playerTwoImage}
                        userName={playerTwoName}
                    >
                        <button className='reset' onClick={() => handleReset(playerTwoId)}>Reset</button>
                    </PlayerPreview> :
                    <PlayerInput label={playerTwoId} id={playerTwoId}/>
                }

            </div>
            {playerOneImage && playerTwoImage ?
                <Link to={{
                    pathname: 'results',
                    search: `?playerOneName=${playerOneName}&playerTwoName=${playerTwoName}`
                }}
                      className='battleLink'> Battle </Link> : null}
            <h2 className='error'>{error ?? <h2> {error}</h2>}</h2>
        </div>


    )
}

export default Players;