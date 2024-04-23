import {useState} from "react";
import TodosItem from "./TodosItem";
import {useDispatch} from "react-redux";
import {addTodoItem} from "../../store/todoSlise";
import Input from "../Input";

const TodoList = () => {

    const [todoText, setTodoText] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = () => {
        dispatch(addTodoItem({todoText}));
        setTodoText('')
    }

    return (
        <>
            <div className="addTodoItem">
                <Input text={todoText} setText={setTodoText} handleSubmit={handleSubmit} buttonText={'Add'}/>
            </div>
            <ul className="todosList">
                <TodosItem/>
            </ul>
        </>
    )
}

export default TodoList;