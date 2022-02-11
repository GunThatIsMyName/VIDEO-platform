import {configureStore} from"@reduxjs/toolkit";
import userReducer from "./slice/userSlice";
import myReducer from"./slice/myDataSlice";

export const store = configureStore({
    reducer:{
        users:userReducer,
        myData:myReducer
    },
})