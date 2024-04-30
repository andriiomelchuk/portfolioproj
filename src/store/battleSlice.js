import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    playerOneName: '',
    playerOneImage: null,
    playerTwoName: '',
    playerTwoImage: null,
    playerOneId: 'playerOne',
    playerTwoId: 'playerTwo',
    error: null,
    status: '',
}

export const fetchPlayerThunk = createAsyncThunk(
    'battle/fetchPlayerThunk',
    async ({userName, id}, {rejectWithValue, dispatch}) => {
        try {
            const response = await axios.get(`https://api.github.com/users/${userName}`)
            if (!response.data) {
                throw new Error('Server error. Can\'t find player');
            }
            const data = response.data;
            console.log(response.data)
            /*return  response.data*/
            dispatch(addPlayer({data, id}))
        }catch (error) {
            return rejectWithValue(error.message);
        }
    }
)

export const battleSlice = createSlice({
    name: "battle",
    initialState,
    reducers: {
        addPlayer(state, action) {
            if (action.payload.id === state.playerOneId) {
                state.playerOneName = action.payload.data.login;
                state.playerOneImage = action.payload.data.avatar_url;
            } else if (action.payload.id === state.playerTwoId) {
                state.playerTwoName = action.payload.data.login;
                state.playerTwoImage = action.payload.data.avatar_url;
            }
        },
        resetPlayer(state, action) {
            if (action.payload.id === state.playerOneId) {
                state.playerOneName = '';
                state.playerOneImage = null;
            } else if (action.payload.id === state.playerTwoId) {
                state.playerTwoName = '';
                state.playerTwoImage = null;
            }
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPlayerThunk.pending, (state, action) => {
            state.status = 'loading'
        })
        builder.addCase(fetchPlayerThunk.fulfilled, (state, action) => {
            state.status = 'resolved'
            state.playerData = action.payload;
            state.error = null
        })
        builder.addCase(fetchPlayerThunk.rejected, (state, action) => {
            state.status = 'rejected'
            state.error = action.payload === 'Request failed with status code 404' ? 'Server error. Can\'t find player': action.payload;
        })

    }

})

export const {addPlayer, resetPlayer} = battleSlice.actions;

export default battleSlice.reducer;