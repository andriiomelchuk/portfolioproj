import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom"
import {makeBattle} from "../../api/api.github";
import Player from "./Player";

const Results = () => {

    const location = useLocation();
    const [loading, setLoading] = useState(true);
    const [winner, setWinner] = useState(null);
    const [loser, setLoser] = useState(null);
    const [error, setError] = useState(null);


    useEffect(() => {

        const searchParams = new URLSearchParams(location.search);

        makeBattle([searchParams.get('playerOneName'), searchParams.get('playerTwoName')])
            .then(([winner, loser]) => {
                setWinner(winner);
                setLoser(loser);
            })
            .catch((error) => setError(error))
            .finally(() => setLoading(false))

    }, [location.search])



    if (loading) {
        return <p>Loading...</p>
    }

    if (error){
        return <p>Error</p>
    }
    return (
        <div className="result">
            <div className="resultCard winner two-block"><Player label='Winner' profile={winner.profile} score={winner.score} /></div>
            <div className="resultCard loser two-block"><Player label='Loser'  profile={loser.profile} score={loser.score}/></div>
        </div>
    )
}

export default Results;