const PlayerPreview = ({avatar, userName, children}) => {


    return (
        <>
            <div className='playerPreview'>
                <img className='avatar' src={avatar} alt="Avatar"/>
                <h2 className='userName'>@{userName}</h2>
                {children}
            </div>

        </>
    )
}

export default PlayerPreview