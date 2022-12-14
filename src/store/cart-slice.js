import { createSlice } from "@reduxjs/toolkit";
const initialOrderState = {items:[],totalQuanntity:0}
const cartSlice = createSlice({
    name:'cart',
    initialState:initialOrderState,
    reducers:{
        addItemToCart(state,action){
            const newItem = action.payload;
            const existingItem = state.items.find(item=>item.id===newItem.id);
            state.totalQuanntity++;
            if(!existingItem){
                state.items.push({
                    id:newItem.id,
                    price:newItem.price,
                    quantity:1,
                    totalPrice:newItem.price,
                    name:newItem.title
                });
            }else{
                existingItem.quantity++;
                existingItem.totalPrice=existingItem.totalPrice + newItem.price;
            }
        },
        removeItemToCart(state,action){
            const id = action.payload;
            const existingItem= state.items.find(item=>item.id===id);
            state.totalQuanntity--;
            if(existingItem.quantity===1){
               state.items = state.items.filter(item=>{ return item.id !== id})
            }else{
                existingItem.quantity--;
                existingItem.totalPrice=existingItem.totalPrice - existingItem.price;

            }
        },

    }
})
export const cartActions = cartSlice.actions;
export default cartSlice;