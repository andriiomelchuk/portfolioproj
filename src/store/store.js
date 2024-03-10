import {configureStore} from "@reduxjs/toolkit";
import {todoSlice} from "./todoSlise";

export const store = configureStore({
    reducer: {
        todos: todoSlice
    },
})

