

const TodosItem = ({todos, toggleCompleted, removeItem}) => {
    return (
        <>
            {todos.map(todo => <li key={todo.id} className='todoItem'>
                <input type="checkbox" onChange={() => toggleCompleted(todo.id)}/>
                <span>{todo.text}</span>
                <button className='delete' onClick={() => removeItem(todo.id)}>&times;</button>
            </li>)}
        </>
    )
}

export default TodosItem;