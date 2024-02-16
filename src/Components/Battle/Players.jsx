import {useCallback, useState} from "react";
import PlayerPreview from "./PlayerPreview";
import PlayerInput from "./PlayerInput";
import {Link} from "react-router-dom";

const Players = () => {
    const [playerData, setPlayerData] = useState({
        playerOneName: '',
        playerTwoName: '',
        playerOneImage: null,
        playerTwoImage: null
    });

    const handleSubmit = useCallback((id, userName) => {
        setPlayerData((prevState) => ({
            ...prevState,
            [`${id}Name`]: userName,
            [`${id}Image`]: `https://github.com/${userName}.png?size200`
        }))
    }, [])

    const handleReset = (id) => {
        setPlayerData((prevState) => ({
            ...prevState,
            [`${id}Name`]: '',
            [`${id}Image`]: null
        }))
    }

    return (
        <div className="battle">
            <div className='battleBody container'>
                {playerData.playerOneImage ?
                    <PlayerPreview
                        avatar={playerData.playerOneImage}
                        userName={playerData.playerOneName}
                    >
                        <button className='reset' onClick={() => handleReset('playerOne')}>Reset</button>
                    </PlayerPreview> :
                    <PlayerInput label='playerOne' id='playerOne' onSubmit={handleSubmit}/>
                }
                {playerData.playerTwoImage ?
                    <PlayerPreview
                        avatar={playerData.playerTwoImage}
                        userName={playerData.playerTwoName}
                    >
                        <button className='reset' onClick={() => handleReset('playerTwo')}>Reset</button>
                    </PlayerPreview> :
                    <PlayerInput label='playerTwo' id='playerTwo' onSubmit={handleSubmit}/>
                }
            </div>
            {playerData.playerOneImage && playerData.playerTwoImage ?
                <Link to={{
                    pathname: 'results',
                    search: `?playerOneName=${playerData.playerOneName}&playerTwoName=${playerData.playerTwoName}`
                }}
                      className='battleLink'> Battle </Link> : null}
        </div>
    )
}

export default Players ;