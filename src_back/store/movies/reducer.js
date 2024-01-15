import {FETCH_MOVIES_LIST} from "./actions";

const initialState = {
    movies: [],
}

const moviesReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case FETCH_MOVIES_LIST:
            return {...state, movies: [payload]}
        default:
            return state;
    }
}

export default moviesReducer;