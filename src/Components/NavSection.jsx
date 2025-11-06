import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import Botton from './Botton'
import { authContext } from '../AuthContext/AuthContext'

const NavSection = () => {
    const {isOpen, setIsOpen} = useContext(authContext)
  return (
    <nav className='bg-gray-100 shadow-md fixed w-full top-0 left-0 z-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center'>
            {/* logo section */}
            <div className='flex flex-col'>
                 <div className='flex items-center space-x-2 sm:space-x-3'>
                     <img 
                     src="./Image/cleaningImg.jpeg" 
                     alt="MyLogo" 
                     className='w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-contain rounded-full'/>
                     {/* companyName */}
                     <h2 className='text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold text-blue-600 tracking-tight'>
                    Suntim Cleaning Services
                     </h2>
                 </div>
                <span className='text-[10px] sm:text-xs text-gray-500 font-medium'>
               A division of Suntim Healthcare services Ltd
            </span>

            </div>
            {/* dexstp menu */}
            <ul className='hidden md:flex items-center space-x-6 lg:space-x-10 text-gray-700 font-medium'>
            <li><Link to='/' className='hover:text-blue-500 transition'>Home</Link></li>
            <li> <Link to='aboutUs' className='hover:text-blue-500 transition'>About Us</Link></li>
            <li> <Link to='service' className='hover:text-blue-500 transition'>Our Services</Link></li>
            <li> <Link to='Booking' className='hover:text-blue-500 transition'>Booking</Link></li>
            <li> <Link to='Contact' className='hover:text-blue-500 transition'>Contact Us</Link></li>

            </ul>
            <Botton variant='secondary' onClick={()=> setIsOpen(!isOpen)} className="text-2xl focus:outline-none">{isOpen ? "✖" : "☰"}</Botton>
        </div>
        {/* On MobileDevice */}

        {
            isOpen && (
                <div className='md:hidden bg-white shadow-inner transition-all duration-300 ease-in-out overflow-hidden '>
                    <ul className='space-y-4 text-gray-700 font-medium'>
                        <li><Link to='/' className='hover:text-blue-500'>Home</Link></li>
                        <li> <Link to='aboutUs' className='hover:text-blue-500'>About Us</Link></li>
                        <li> <Link to='service' className='hover:text-blue-500'>Our Services</Link></li>
                        <li> <Link to='Booking' className='hover:text-blue-500'>Booking</Link></li>
                        <li> <Link to='Contact' className='hover:text-blue-500'>Contact Us</Link></li>


                    </ul>

                </div>
            )
        }

    </nav>
  )
}

export default NavSection