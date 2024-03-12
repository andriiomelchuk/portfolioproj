const AddTodos = ({text, setText, addItem}) => {


    return (
        <>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
            <button onClick={addItem}>Add</button>
        </>
    )
}

export default AddTodos;