import './Input.less'

const Input = ({text, setText, handleSubmit, buttonText, placeholder}) => {
    return (
        <>
            <form className='searchForm'>
                <input type="text" placeholder={placeholder} value={text}
                       onChange={(e) => setText(e.target.value)}/>
                <button disabled={!text.length} onClick={handleSubmit}>{buttonText}</button>
            </form>
        </>
    )
}

export default Input;