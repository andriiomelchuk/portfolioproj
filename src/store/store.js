import {configureStore} from "@reduxjs/toolkit";
import TodosReducer from "./todoSlise";

export const store = configureStore({
    reducer: {
        todos: TodosReducer
    },
})

