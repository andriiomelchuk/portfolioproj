import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {fetchMovieList} from "../api/api.movies";


const initialState = {
    movies: [],
    status: '',
    error: null,
    movieType: '',
    movieName: '',
}

export const fetchMoviesThunk = createAsyncThunk(
    'movies/fetchMoviesThunk',
    async ({movieName, movieType}, {rejectWithValue, dispatch}) => {
        try {
            const response = await fetchMovieList(movieName, movieType);

            if(!response){
                throw new Error('Can\'t fetch movies');
            }

            return response;

        }catch (error) {
            return rejectWithValue(error.message);
        }
    }

);


export const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        addMovieName (state, action) {
            state.movieName = action.payload.moviesName;
        },
        addMovieType (state, action) {
            state.movieType = action.payload.type;
        },

    },
    extraReducers: (builder) => {
        builder.addCase(fetchMoviesThunk.pending, (state, action) => {
            state.status = 'loading'
        })
        builder.addCase(fetchMoviesThunk.fulfilled, (state, action) => {
            state.status = 'resolved'
            state.movies = action.payload;
        })
        builder.addCase(fetchMoviesThunk.rejected, (state, action) => {
            state.status = 'rejected'
        })

    }
})

export const {addMovieType, addMovieName} = moviesSlice.actions;

export default moviesSlice.reducer;