import {configureStore} from "@reduxjs/toolkit";
import TodosReducer from "./todoSlise";
import PopularReducer from "./popularSlice";

export const store = configureStore({
    reducer: {
        todos: TodosReducer,
        popular: PopularReducer,
    },
})

