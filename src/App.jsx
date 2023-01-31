import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Banner from './components/Banner/Banner'
import Categorys from './components/Categorys/Categorys'
import Footer from './components/Footer/Footer'
import NavBar from './components/NavBar/NavBar'
import Payment from './components/PaymentMethods/Payment'

function App() {

  return (
    <div >
      <NavBar />
      <Banner />
      <div className='bg-gray-200 min-h-screen p-7'>
        <Payment />
        <Categorys/>
      </div>
      <Footer/>
    </div>
  )
}

export default App
