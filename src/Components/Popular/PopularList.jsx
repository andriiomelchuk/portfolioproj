import PopularItem from "./PopularItem";
import {useSelector} from "react-redux";


const PopularList = () => {

    const repos = useSelector(state => state.popular)

    return (
        <>
            {repos.repos.map((repo, index) => (
                <li className='popularItem' key={repo.id}>
                    <PopularItem
                        login={repo.owner.login}
                        avatar={repo.owner.avatar_url}
                        language={repo.language}
                        name={repo.name}
                        url={repo.html_url}
                        star={repo.stargazers_count}
                        index={index}
                    />
                </li>
            ))}
        </>
    )
}

export default PopularList;