import {useState} from "react";
import {useDispatch} from "react-redux";
import {addTodoItem} from "../../store/todoSlise";
import Input from "../Input";
import Todoslist from "./TodosList";

const Todos = () => {
    const [todoText, setTodoText] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = () => {
        dispatch(addTodoItem({todoText}));
        setTodoText('')
    }

    return (
        <>
            <div className="addTodoItem">
                <Input text={todoText} setText={setTodoText} handleSubmit={handleSubmit} buttonText={'Add'}
                       placeholder={undefined}/>
            </div>
            <Todoslist />
        </>
    )
}

export default Todos;