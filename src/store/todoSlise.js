import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id: new Date().toISOString(),
    text:'',
    completed: false
}

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addItem: (state) => {

        }
    }
})