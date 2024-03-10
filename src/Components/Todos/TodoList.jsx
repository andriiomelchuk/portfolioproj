import {useState} from "react";
import AddTodos from "./AddTodos";
import TodosItem from "./TodosItem";

const TodoList = () => {

    const [text, setText] = useState('');
    const [todos, setTodos] = useState([]);


    const addItem = () => {
        setTodos([
            ...todos,
            {
                id: new Date().toISOString(),
                text,
                completed: false
            }
        ])
    }

    const removeItem = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    const toggleCompleted = (id) => {
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
            <div className="addTodoItem">
                <AddTodos text={text} setText={setText} addItem={addItem}/>
            </div>
            <ul className="todosList">
                <TodosItem todos={todos} toggleCompleted={toggleCompleted} removeItem={removeItem}/>
            </ul>
        </>
    )
}

export default TodoList;