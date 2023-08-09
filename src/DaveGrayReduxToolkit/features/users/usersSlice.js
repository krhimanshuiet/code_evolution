import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "himanshu singh" },
  { id: "1", name: "ankit singh" },
  { id: "2", name: "sudhanshu singh" },
  { id: "3", name: "mayank singh" },
  { id: "4", name: "sunil singh" },
];

const userSlice = createSlice({
    name:"users",
    initialState,
    reducers:{
        addUser:(state , action) => {
            state.push(action.payload)
        },
        prepare:(name) => {
           return (
            {
                id:nanoid(),
                name
            }
           )
        }
    }
})

export const selectAllUsers = (state) => state.users;
export const {addUsers} = userSlice.actions;
export default userSlice.reducer;