
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import NavSection from './Components/NavSection'
import AuthProvider from './AuthContext/AuthContext'
import AboutUs from './Pages/AboutUs'
import HomePage from './Pages/HomePage'
import OurServices from './Pages/OurServices'
import Booking from './Pages/Booking'
import ContactUs from './Pages/ContactUs'
import FooterComponent from './Components/FooterComponent'

function App() {
  

  return (
    <>
      <div className="min-h-screen  flex flex-col bg-green-100">
          <BrowserRouter>
          <AuthProvider>
            {/* Navigation bar.... */}
          <NavSection />

             {/* Main Content Area */}
          <main className='flex-1 mt-[70px]  md:mt-[90px] px-4 sm:px-6 md:px-10 lg:px-20 py-6'>
          <Routes>
            <Route path='/' element = {<HomePage />} />
            <Route path='/aboutUs' element = {<AboutUs />}/>
            <Route path='/service' element ={<OurServices />}/>
            <Route path='/Booking' element = {<Booking />}/>
            <Route path='/Contact' element = {<ContactUs />}/>
          </Routes>
         
          </main>
           {/* Foooter....... */}
          <footer className='mt-auto'>
          <FooterComponent />
          </footer>
          
          </AuthProvider>
          </BrowserRouter>
        
     
      
    </div>
   
     
    </>
  )
}

export default App
