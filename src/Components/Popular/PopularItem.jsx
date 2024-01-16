const PopularItem = ({name, avatar, language, login, url, star, index}) => {
    return (
        <ul>
            <div className='popularRank'>#{index + 1}</div>
            <li>
                <img src={avatar} alt="Avatar"/>
            </li>
            <li>{login}</li>
            <li>{star}</li>
            <li>{language}</li>
            <li>
                <a href={url}>{name}</a>
            </li>
        </ul>
    )
}

export default PopularItem;