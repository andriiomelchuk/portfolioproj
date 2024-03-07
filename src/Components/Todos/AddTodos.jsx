const AddTodos = ({text, setText, addListItem}) => {
    return (
        <>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
            <button onClick={addListItem}>Add</button>
        </>
    )
}

export default AddTodos ;