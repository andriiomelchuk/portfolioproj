import {useState} from "react";
import AddTodos from "./AddTodos";
import TodosItem from "./TodosItem";

const TodoList = () => {

    const [text, setText] = useState('');
    const [todos, setTodos] = useState([]);

    const addListItem = () => {
        setTodos([
            ...todos,
            {
                id: new Date().toISOString(),
                text,
                completed: false
            }
        ]);
        setText('');
    }

    const removeTodoItem = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
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
            <AddTodos text={text} setText={setText} addListItem={addListItem}/>

            <ul>
                <TodosItem todos={todos} toggleTodoComplete={toggleTodoComplete} removeTodoItem={removeTodoItem}/>
            </ul>
        </>
    )
}

export default TodoList;