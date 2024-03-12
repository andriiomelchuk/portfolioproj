import {useState} from "react";
import AddTodos from "./AddTodos";
import TodosItem from "./TodosItem";
import {useDispatch} from "react-redux";
import {addTodoItem} from "../../store/todoSlise";

const TodoList = () => {

    const [todoText, setTodoText] = useState('');
    const dispatch = useDispatch();

    const addItem = () => {
        dispatch(addTodoItem({todoText}));
        setTodoText('')
    }

    return (
        <>
            <div className="addTodoItem">
                <AddTodos text={todoText} setText={setTodoText} addItem={addItem}/>
            </div>
            <ul className="todosList">
                <TodosItem/>
            </ul>
        </>
    )
}

export default TodoList;