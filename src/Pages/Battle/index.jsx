import {useCallback, useState} from "react";
import PlayerInput from "../../Components/Battle/PlayerInput";
import "../../Components/Battle/Battle.css"
import PlayerPreview from "../../Components/Battle/PlayerPreview";
import {Link} from "react-router-dom";

const Battle = () => {

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
                <Link to='/' className='battleLink'> Battle </Link> : null}
        </div>
    )
}

export default Battle;