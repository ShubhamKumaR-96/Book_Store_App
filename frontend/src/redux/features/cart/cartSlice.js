import { createSlice } from "@reduxjs/toolkit";
import Swal from 'sweetalert2';

const initialState={
    cartItem:[]
}

const cartSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart:(state,action)=>{
          const existingItem=state.cartItem.find(item=>item._id===action.payload._id);
          if(!existingItem){
            state.cartItem.push(action.payload)
            Swal.fire({
                icon: 'success',
                title: 'Item Added',
                text: 'The item has been added to your cart!',
                showConfirmButton: false,
                timer: 1500
              });
          }else {
            Swal.fire({
                icon: 'warning',
                title: 'Already Exists',
                text: 'This item is already in your cart.',
              });
          }
        },
        removeFromCart:(state,action)=>{
            state.cartItem=state.cartItem.filter(item=>item._id !==action.payload._id)
        },
        clearCartItem:(state)=>{
            state.cartItem=[]
        }
    }
})

export const {addToCart,removeFromCart,clearCartItem}=cartSlice.actions;
export default cartSlice.reducer;