import {useState} from "react";

const Todolist = () => {
    const [text, setText] = useState('');
    const [todos, setTodos] = useState([]);

    const addListItem = () => {
        if(text.trim().length){
            setTodos([
                ...todos,
                {
                    id: new Date().toISOString(),
                    text,
                    completed: false
                }
            ])
            setText('')
        }
    }

    const removeTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const toggleTodoComplete = (id) => {
        setTodos(todos.map(todo => {
            if (todo.id !== id) return todo;

            return {
                ...todo,
                completed: !todo.completed
            }
        }))
    }

    return (
        <>

            <input type="text" value={text} onChange={(e) => setText(e.target.value) }/>
            <button onClick={addListItem}>Add</button>
            <ul className='todoList'>
                {todos.map(todo => <li key={todo.id} className='todoItem'>
                    <input type="checkbox" checked={todo.completed} onChange={() => toggleTodoComplete(todo.id)}/>
                    <span className='todoText'>{todo.text}</span>
                    <span className='delete' onClick={() => removeTodo(todo.id)}>&times;</span>
                </li>)}
            </ul>


        </>
    )
}

export default Todolist;