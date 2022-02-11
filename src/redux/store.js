import {configureStore} from"@reduxjs/toolkit";
import userReducer from "./slice/userSlice";
import myReducer from"./slice/myDataSlice";
import selectedUser from "./slice/selectedUser";

export const store = configureStore({
    reducer:{
        users:userReducer,
        myData:myReducer,
        selectedUser:selectedUser
    },
})