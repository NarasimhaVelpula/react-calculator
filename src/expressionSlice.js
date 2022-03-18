import { createSlice } from "@reduxjs/toolkit";

export const expressionSlice=createSlice({
    name: 'expression',
    initialState:'',
    reducers:{
        adder:(state,action)=>{
            state+=action.payload
            return state
        },
        remover:(state)=>{
            state=state.slice(0,-1)
            return state
        },
        evaluator:(state)=>{
            state=eval(state)
            return state
        },
        reset:(state)=>{
            state=""
            return state
        }

    }
    
})

export const {adder, remover,evaluator, reset }= expressionSlice.actions
export default expressionSlice.reducer