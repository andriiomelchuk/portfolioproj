const TodosItem = ({todos, toggleTodoComplete, removeTodoItem}) => {
    return (
        <>
            {todos.map(todo =>
                <li className='todoItem' key={todo.id}>
                    <input type="checkbox" checked={todo.completed} onChange={() => toggleTodoComplete(todo.id)}/>
                    <span className='todoText'>{todo.text}</span>
                    <button onClick={() => removeTodoItem(todo.id)} className='delete'>&times;</button>
                </li>
            )}
        </>
    )
}

export default TodosItem;