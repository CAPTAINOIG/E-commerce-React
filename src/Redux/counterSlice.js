import { createSlice } from "@reduxjs/toolkit";



export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    cart: []
  },
  reducers: {
    increment: (state, payload) => {
      // state.cart = state.cart + 1
      // note, the payload is the id of the product
      let productItem = state.cart.find((item) => item.id === payload.payload)
      //     console.log(productItem);
      productItem.cartQuantity +=1
      // console.log(productItem.cartQuantity);
    },

    decrement: (state, action) =>{
        // state.cart = state.cart > 0 ? state.cart - 1 : 0
        let productItem = state.cart.find((item) => item.id === action.payload)
        productItem.cartQuantity > 1 ? productItem.cartQuantity -=1 : 0
        // console.log(payload);
    },
    remove: (state, action)=> {
      state.cart.splice(action.payload, 1)
    },
    

    
    addToCart: (state, payload) =>{
      state.cart.push(payload.payload)
      console.log(payload.payload);
      // localStorage.setItem("cartItems", JSON.stringify(state.cart)) 
  },
  }
})

export const { increment, decrement, remove, addToCart } = counterSlice.actions
export default counterSlice.reducer

