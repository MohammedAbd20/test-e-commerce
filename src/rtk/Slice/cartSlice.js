import { createSlice } from "@reduxjs/toolkit";


export const cartSlice = createSlice({
    initialState:localStorage.getItem("addCart") !==null ? JSON.parse(localStorage.getItem("addCart")): [],
    name:"cartSlice",
    reducers:{
        addCart:(state,action)=>{
            const findPRoduct = state.find(product=>product.id === action.payload.id)
            console.log(state)
            if(!findPRoduct){
                state.push(action.payload)
            }
            localStorage.setItem('addCart',JSON.stringify(state.map(item=>item)))
        },
        deleteCart:(state,action)=>{
            const filterProduct = state.filter((product)=> product.id != action.payload.id)
            localStorage.setItem('addCart',JSON.stringify(filterProduct.map(item=>item)))
            return filterProduct
            
        },
        clearAll:(state,action)=>{
            localStorage.setItem('addCart',JSON.stringify([]))
            return []
        },
        
    }
    
})
export const {addCart,deleteCart,clearAll} = cartSlice.actions;
export default cartSlice.reducer;