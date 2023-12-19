import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: 'counter',
  initialState: {
    count: 1,
    counter: 0,
    children: 0,
    email: 'abdullahisamsudden@gmail.com',
  },
  reducers: {
    increment: (state) => {
      if (state.count < 4) {
        state.count += 1;
      }
    },
    decrement: (state) =>{
        state.count = state.count > 0 ? state.count - 1 : 0
    },


    add: (state) => {
      if (state.children < 2) {
        state.children += 1;
      }
    },
    minus: (state) =>{
        state.children = state.children > 0 ? state.children - 1 : 0
    },

    increase: (state) => {
      if (state.counter < 6) {
        state.counter += 1;
      }
    },
    decrease: (state, action) => {
      state.counter -= action.payload; // Subtracts the payload value from the count
      if (state.counter < 0) {
        state.counter = 0; // Ensure the count doesn't go negative
      }
    },
    setEmail: (state, action) => {
      state.email = action.payload; // Set the email value based on the payload
    },
  }
})

export const { increment, decrement, increase, decrease, add, minus, setEmail } = counterSlice.actions
export default counterSlice.reducer
