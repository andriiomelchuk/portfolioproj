import {configureStore} from "@reduxjs/toolkit";
import TodosReducer from "./todoSlise";
import PopularReducer from "./popularSlice";
import MoviesReducer from "./moviesSlice";

export const store = configureStore({
    reducer: {
        todos: TodosReducer,
        popular: PopularReducer,
        movies: MoviesReducer,
    },
})

