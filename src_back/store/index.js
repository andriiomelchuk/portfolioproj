import {combineReducers} from 'redux'
import {configureStore} from "@reduxjs/toolkit";
import moviesReducer from "./movies/reducer";

const rootReducer = combineReducers({
    moviesReducer,
});

export default configureStore({
    reducer: rootReducer,
});

