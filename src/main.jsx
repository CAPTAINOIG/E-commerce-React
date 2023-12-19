import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

import DashboardContext from './context/Dashboard.jsx'
import { Provider } from 'react-redux'
import counterReducer from './Redux/counterSlice.js'
import {configureStore} from '@reduxjs/toolkit'


const store = configureStore({
  reducer: {
    counterReducer
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DashboardContext>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </DashboardContext>
  </React.StrictMode>,
)
