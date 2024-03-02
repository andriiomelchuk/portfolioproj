const PopularItem = ({name, avatar, language, login, url, star, index}) => {
    return (
        <ul>
            <div className='popularRank'>Rank: #{index + 1}</div>
            <li className='ava'>
                <img src={avatar} alt="Avatar"/>
            </li>
            <li className='name'>{login}</li>
            <li className='star'>{star}</li>
            <li className='lang'>{language}</li>
            <li className='link'>
                <a href={url} target='_blank'>{name}</a>
            </li>
        </ul>
    )
}

export default PopularItem;