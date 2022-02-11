import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import GithubApi from '../../utils/GithubApi'

export const fetchMyData = createAsyncThunk("user/myData",async()=>{
    const {data} = await GithubApi.get("users/GunThatIsMyName");
    console.log(data);
    return data;
})

const initialState={
    myData:{},
    loading:false,
    error:false,
}

export const mydataSlice = createSlice({
    name: 'myData',
    initialState,
    reducers:{
        loading:(state)=>{
            console.log("LOADING")
            return state;
        },
        addUser:(state,{payload})=>{
            console.log(payload,"232323")
            console.log("GET USER DATA")
            return state;
        },
        error:(state)=>{
            console.log("ERROR")
            return state;
        }
    },
    extraReducers:{
        [fetchMyData.pending]: (state) => {
            return {...state,loading:true,error:false};
        },
        [fetchMyData.fulfilled]: (state, {payload}) => {
            const {name, blog, html_url, avatar_url}=payload;
            return {...state,myData:{name, blog, html_url, avatar_url},loading:false};
        },
        [fetchMyData.rejected]: (state) => {
            return {...state,loading:false,error:true};
        },
    }
})

export const {loading,addUser,error} = mydataSlice.actions;
export default mydataSlice.reducer;