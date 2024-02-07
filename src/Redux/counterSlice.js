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
      let productItem = state.cart.find((item) => item.id === payload.payload )
      productItem.cartQuantity +=1
      // console.log(payload);
    },
    decrement: (state, action) =>{
        // state.cart = state.cart > 0 ? state.cart - 1 : 0
        let productItem = state.cart.find((item) => item.id === action.payload )
        productItem.cartQuantity > 1 ? productItem.cartQuantity -=1 : 0
        // console.log(payload);
    },
    remove: (state, action)=> {
      state.cart.splice(action.payload, 1)
    },
    

    
    addToCart: (state, payload) =>{
      state.cart.push(payload.payload)
      // localStorage.setItem("cartItems", JSON.stringify(state.cart)) 
  },
  }
})

export const { increment, decrement, remove, addToCart } = counterSlice.actions
export default counterSlice.reducer






// import { createSlice } from "@reduxjs/toolkit";

// const cartData = () => {
//   const item = window.localStorage.getItem('productdetail');
//   return item ? JSON.parse(item) : [];
// };

// export const counterSlice = createSlice({
//   name: 'counter',
//   initialState: {
//     cart: cartData(),
//   },
//   reducers: {
//     increment: (state, action) => {
//       const { payload } = action;
//       const productItem = state.cart.find((item) => item.id === payload);
//       if (productItem) {
//         productItem.quantity += 1;
//       }
//     },
//     decrement: (state, action) => {
//       const { payload } = action;
//       const productItem = state.cart.find((item) => item.id === payload);
//       if (productItem && productItem.quantity > 0) {
//         productItem.quantity -= 1;
//       }
//     },
//     addToCart: (state, action) => {
//       const product = action.payload;
//       if (!state.cart) {
//         state.cart = []; // Initialize the cart if it's not already initialized
//       }
//       const existingProduct = state.cart.find((item) => item.id === product.id);
//       if (!existingProduct) {
//         state.cart.push({ ...product, quantity: 1 }); // Initialize quantity to 1
//       } else {
//         existingProduct.quantity += 1;
//       }
//   }}
// });

// export const { increment, decrement, addToCart } = counterSlice.actions;
// export default counterSlice.reducer;
