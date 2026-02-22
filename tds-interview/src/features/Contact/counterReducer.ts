import { createSlice } from "@reduxjs/toolkit";

export type CounterState = {
    data: number
}

const initialState: CounterState = {
    data: 23 //mj
}

export default function counterReducer(state = initialState) {
    return state;
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state, action) => {
            state.data += action.payload
        },
        decrement: (state, action) => {
            state.data -= action.payload
        }
    }
})

export const { increment, decrement } = counterSlice.actions;