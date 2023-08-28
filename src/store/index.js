import { configureStore } from "@reduxjs/toolkit";
import  stockSlice  from "./slices/StockSlice";

const store =configureStore({
    reducer :{
        stocks:stockSlice,
    },
})

export default store;