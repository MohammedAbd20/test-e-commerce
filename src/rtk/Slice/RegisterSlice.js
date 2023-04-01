import { createSlice } from "@reduxjs/toolkit";



export const RegisterSlice = createSlice({
    initialState:[],
    name:"RegisterSlice",
    reduser:{
        addNewUser:(state,action)=>{
            // state.push(action.paylpad)
            const findPRoduct = state.find(product=>product.email === action.payload.email)
            if(!findPRoduct){
                
            }
        }
    }
})

export const {addNewUser} = RegisterSlice.actions
export default RegisterSlice.reducer