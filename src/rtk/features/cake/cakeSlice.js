import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    numOfCakes:10
}

const cakeSlice = createSlice({
    name:'cake',
    initialState,
    reducers:{
        ordered:(state) => {
            state.numOfCakes--;
        },
        reStocked:(state,action) => {
            state.numOfCakes += action.payload;
        }
    },
    extraReducers:{
        
    }


})

export default  cakeSlice.reducer
export const {ordered,reStocked}= cakeSlice.actions
