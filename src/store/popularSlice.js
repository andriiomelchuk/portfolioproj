import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {fetchPopularRepos} from "../api/api.github";



const initialState = {
    repos: [],
    status: '',
    error: null,
    lang: '',
}

export const fetchPopular =  createAsyncThunk (
    'popular/fetchPopular',
    async (arg, {rejectWithValue}) => {
        try {
            const response = await fetchPopularRepos(arg);
            console.log(response)
            if (!response){
                throw new Error('Server error. Can\'t loading')
            }

            return response.data.items;
        }catch (error){
            return rejectWithValue(error.message);
        }
    }
)


export const popularSlice = createSlice({
    name: 'popular',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchPopular.pending, (state, action) => {
            state.status = 'loading'
            state.error = null;
        })
        builder.addCase(fetchPopular.fulfilled, (state, action) => {
            state.status = 'resolved'
            state.repos = action.payload;
            state.error = null;
        })
        builder.addCase(fetchPopular.rejected, (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        })
    }
})


export default popularSlice.reducer;