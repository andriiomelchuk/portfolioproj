import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: []
}

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodoItem (state, action)  {
            state.todos.push({
                id: new Date().toISOString(),
                text: action.payload.todoText,
                completed: false
            })
        },
        removeTodoItem(state, action) {
            state.todos = state.todos.filter((todo) =>  todo.id !== action.payload.id)
        },
        toggleTodoCompleted(state, action) {
           state.todos = state.todos.map(todo => {
                if (todo.id !== action.payload.id) return todo;

                return {
                    ...todo,
                    completed: !todo.completed
                }
            })
        },
    }
})

export const {addTodoItem, removeTodoItem, toggleTodoCompleted} = todoSlice.actions;

export default todoSlice.reducer;