import {useDispatch, useSelector} from "react-redux";
import {removeTodoItem, toggleTodoCompleted} from "../../store/todoSlise";


const TodosItem = () => {

    const todos = useSelector(state => state.todos.todos);
    const dispatch = useDispatch();

    const removeItem = (id) => {
        dispatch(removeTodoItem({id}))
    }

    const toggleCompleted = (id) => {
        dispatch(toggleTodoCompleted(id))
    }

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