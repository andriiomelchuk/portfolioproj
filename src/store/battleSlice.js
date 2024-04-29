import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";


const initialState = {
    /*    playerOneData: [
            {playerOneName: '',},
            {playerOneImage: null,}
        ],

        playerTwoData: [
            {playerTwoName: '',},
            {playerTwoImage: null,}
        ]*/
    playerOneName: '',
    playerOneImage: null,
    playerTwoName: '',
    playerTwoImage: null,
    playerOneId: 'playerOne',
    playerTwoId: 'playerTwo',
}

export const battleSlice = createSlice({
    name: "battle",
    initialState,
    reducers: {
        addPlayer(state, action) {
            if (action.payload.id === state.playerOneId) {
                state.playerOneName = action.payload.userName;
                state.playerOneImage = `https://github.com/${action.payload.userName}.png?size200`;
            } else if (action.payload.id === state.playerTwoId) {
                state.playerTwoName = action.payload.userName;
                state.playerTwoImage = `https://github.com/${action.payload.userName}.png?size200`;
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


})

export const {addPlayer, resetPlayer} = battleSlice.actions;

export default battleSlice.reducer;