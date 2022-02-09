import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import GithubApi from "../../utils/GithubApi";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const { data } = await GithubApi.get(`users`);
  return data;
});

const initialState = {
  users: [],
  loading: false,
  error: false,
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUsers: (state, { payload }) => {
      console.log(payload, "check Payload");
      state.users = payload;
      state.loading = false;
      state.error = false;
    },
    loadingUser: (state) => {
      console.log("Loading User");
      state.loading = true;
    },
    errorUser: (state, payload) => {
      console.log(payload, "Error Handle");
      state.error = true;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      console.log("Pending");
      return { ...state, loading: true, error: false };
    });
    builder.addCase(fetchUsers.fulfilled, (state, { payload }) => {
      console.log("fetched Succeful!");
      return { ...state, users: payload, loading: false, error: false };
    });
    builder.addCase(fetchUsers.rejected, (state) => {
      console.log("Rejected!");
      return { ...state, loading: false, error: true };
    });
    // [fetchUsers.pending]:(state)=>{
    //     console.log("Pending");
    //     return{...state,loading:true,error:false}
    // },
    // [fetchUsers.fulfilled]:(state,{payload})=>{
    //     console.log("fetched Succeful!");
    //     return{...state,users:payload,loading:false,error:false}
    // },
    // [fetchUsers.rejected]:(state)=>{
    //     console.log("Rejected!");
    //     return{...state,loading:false,error:true}
    // }
  },
});

export const getAllUsers = (state) => state.users;

export const { addUsers, errorUser, loadingUser } = userSlice.actions;
export default userSlice.reducer;
