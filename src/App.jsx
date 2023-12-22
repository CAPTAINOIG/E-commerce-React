import { Route, Routes } from 'react-router-dom'
import './App.css'
// import Navbar from './component/Navbar'
// import Header from './component/Header'
// import SortByNames from './component/SortByNames'
// import Product from './component/Product'
// import Shop from './component/Shop'
// import Footer from './FooterComponent/Footer'
import Shoppingdetail from './component/Shoppingdetail'
import Usercart from './component/Usercart'
import Datadetails from './component/Datadetails'
import Paystack from './component/Paystack'



function App() {


  return (
    <>
  
    
    
    <Routes>
    <Route path='/' element={<Datadetails/>}/>
    <Route path='/details' element={<Shoppingdetail/>}/>
    <Route path='/cart' element={<Usercart/>}/>
    <Route path='/paystack' element={<Paystack/>}/>
    </Routes>
    
   
   
    
    
    </>
  )
}

export default App
