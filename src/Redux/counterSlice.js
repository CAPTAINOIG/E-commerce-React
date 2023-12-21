import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    cart: [],
  },
  reducers: {
    increment: (state, payload) => {
      // state.cart = state.cart + 1
      let productItem = state.cart.find((item) => item.id === payload.payload )
      productItem.cartQuantity +=1
      console.log(payload);
    },
    decrement: (state) =>{
        // state.cart = state.cart > 0 ? state.cart - 1 : 0
        let productItem = state.cart.find((item) => item.id === payload.payload )
        productItem.cartQuantity -=1
        console.log(payload);
    },
    addToCart: (state, payload) =>{
      state.cart.push(payload.payload)
  },
  }
})

export const { increment, decrement, addToCart } = counterSlice.actions
export default counterSlice.reducer

