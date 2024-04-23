import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface CounterState {
    value: number
}

const initialState: CounterState = {
    value: 0
}

const CounterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementMax: (state, action: PayloadAction<number>) => {
            state.value += action.payload
        }
    },extraReducers:(builder)=>{
        builder
        .addCase(incrementAsync.pending,()=>{
            console.log("incrementAsync.pending");
            
        })
        .addCase(incrementAsync.fulfilled,(state,action:PayloadAction<number>)=>{
            state.value+=action.payload;
        })

    }
})

export const incrementAsync = createAsyncThunk(
    "counter/incrementAsync",
    async (value: number) => {
        await new Promise((resolve) => setTimeout(resolve, 1000))
        return value
    }
)
export const { increment, decrement, incrementMax, } = CounterSlice.actions
export default CounterSlice.reducer