import { createSlice } from "@reduxjs/toolkit";

const initialState={
    users:[]
}

export const userSlice = createSlice({
    name:"users",
    initialState,
    reducers:{
        addUsers:(state,{payload})=>{
            console.log(payload,"check Payload");
            state.users=payload;
        }
    }
});

export const getAllUsers = (state)=>state.users.users;


export const { addUsers } = userSlice.actions
export default userSlice.reducer;
