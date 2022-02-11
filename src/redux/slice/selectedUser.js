import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import GithubApi from "../../utils/GithubApi";

export const selectedUserFetch = createAsyncThunk(
  "slected/user",
  async (user) => {
    const { data } = await GithubApi.get(`users/${user}`);
    console.log(data, "Data");
    return data;
  }
);

const initialState = {
  selectedUser: {},
  loading: false,
  error: false,
};

export const selectedUser = createSlice({
  name: "selected",
  initialState,
  reducers: {
    loading: (state) => {
      console.log("LOADING");
      return state;
    },
    addUser: (state, { payload }) => {
      console.log(payload, "232323");
      console.log("GET USER DATA");
      return state;
    },
    error: (state) => {
      console.log("ERROR");
      return state;
    },
  },
  extraReducers: {
    [selectedUserFetch.pending]: (state) => {
      return { ...state, loading: true, error: false };
    },
    [selectedUserFetch.fulfilled]: (state, { payload }) => {
      return {
        ...state,
        selectedUser:payload,
        loading: false,
      };
    },
    [selectedUserFetch.rejected]: (state) => {
      return { ...state, loading: false, error: true };
    },
  },
});

export const { loading, addUser, error } = selectedUser.actions;
export default selectedUser.reducer;