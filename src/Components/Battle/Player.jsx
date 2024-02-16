import PlayerPreview from "./PlayerPreview";

const Player = ({label, profile, score}) => {
    return (
        <>
            <h1>{label}</h1>
            <h3>Score: {score} </h3>
            <PlayerPreview userName={profile.login} avatar={profile.avatar_url}>
                <ul>
                    {profile.name ? <li>{profile.name}</li> : null}
                    {profile.location ? <li>{profile.location}</li> : null}
                    {profile.company ? <li>{profile.company}</li> : null}
                    <li>Followers: {profile.followers}</li>
                    <li>Following: {profile.following}</li>
                    <li>Public repos: {profile.public_repos}</li>
                    {profile.blog ? <li><a href={profile.blog} target='_blank' rel='noreferrer'>{profile.blog}</a></li> : null}
                </ul>
            </PlayerPreview>
        </>
    )
}

export default Player;