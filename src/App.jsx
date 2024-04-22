import { Route, Routes } from 'react-router-dom'
import './App.css'
import Shoppingdetail from './component/Shoppingdetail'
import Usercart from './component/Usercart'
import Datadetails from './component/Datadetails'
import Loader from './component/Loader'
import CustomModal from './component/CustomModal'




function App() {


  return (
    <>

<div className='font-[Mirza]'>


      <Routes>
        <Route path='/' element={<Loader />} />
        <Route path='/modal' element={<CustomModal />} />
        <Route path='/fashion' element={<Datadetails />} />
        <Route path='/details' element={<Shoppingdetail />} />
        <Route path='/cart' element={<Usercart />} />
      </Routes>


</div>



    </>
  )
}

export default App
