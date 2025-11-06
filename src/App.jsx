
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import NavSection from './Components/NavSection'
import AuthProvider from './AuthContext/AuthContext'
import AboutUs from './Pages/AboutUs'
import HomePage from './Pages/HomePage'
import OurServices from './Pages/OurServices'
import Booking from './Pages/Booking'
import ContactUs from './Pages/ContactUs'

function App() {
  

  return (
    <>
      <div className="min-h-screen bg-green-400 flex flex-col">
          <BrowserRouter>
          <AuthProvider>
          <NavSection />

          <main className='flex-1 mt-[80px] px-4 md:px-8'>
          <Routes>
            <Route path='/' element = {<HomePage />} />
            <Route path='/aboutUs' element = {<AboutUs />}/>
            <Route path='/service' element ={<OurServices />}/>
            <Route path='/Booking' element = {<Booking />}/>
            <Route path='/Contact' element = {<ContactUs />}/>
          </Routes>
          </main>
          </AuthProvider>
          </BrowserRouter>
        
     
      
    </div>
   
     
    </>
  )
}

export default App
