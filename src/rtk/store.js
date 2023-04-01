import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./Slice/cartSlice";
import RegisterSlice from "./Slice/RegisterSlice";



export const store = configureStore({
    reducer:{
        cart : cartSlice,
        Register : RegisterSlice,
    }
})