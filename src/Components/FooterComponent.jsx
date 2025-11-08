import { Mail, MapPin, Phone } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
import {FaFacebook, FaLinkedin, FaTwitter} from 'react-icons/fa'

const FooterComponent = () => {
  return (
   <footer className='bg-gray-900 text-gray-300 py-10 mt-20'>
    <div className='max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10'>
        {/* Brand Info....... */}
        <div>
            <h2 className='text-2xl font-bold text-white mb-3'>Sutim Cleaning Services</h2>
            <p className='text-sm leading-6'>
            We provide reliable residential and commercial cleaning services with 
            modern tools and eco-friendly solutions — ensuring your space stays fresh, 
            healthy, and spotless.

            </p>
        </div>
        {/* Quick Links....... */}
        <div>
            <h3 className='text-lg font-semibold text-white mb-3'>Quick Links</h3>
            <ul className='space-y-2 text-sm'>
                <li><Link to='/' className='hover:text-blue-400 transition'>Home</Link></li>
                <li><Link to='/aboutUs' className='hover:text-blue-400 transition'>About Us</Link></li>
                <li><Link to='/service' className='hover:text-blue-400 transition'>Our Services</Link></li>
                <li><Link to='/Booking' className='hover:text-blue-400 transition'>Booking</Link></li>
                <li><Link to='/Contact' className='hover:text-blue-400 transition'>Contact Us</Link></li>

            </ul>
        </div>
        {/* Contact Info....... */}
        <div>
            <h3 className='text-lg font-semibold text-white mb-3'>Contact</h3>
            <ul className='space-y-3 text-sm'>
                <li className='flex items-center gap-2'>
                    <MapPin size={18} /> <span>Market Square Narberth Pembrokeshire. SA67 7AU</span>

                </li>
                <li className='flex items-center gap-2'>
                    <Phone size={18} /> <span>+447 881 189 989</span>

                </li>
                <li className='flex items-center gap-2'>
                    <Mail size={18} /> <span>info@suntimcleaning.com</span>
                </li>

            </ul>
        </div>
        {/* Social Medial Handle..... */}
        <div>
            <h3 className='text-lg font-semibold text-white mb-3'>Follow Us</h3>
            <div className='flex gap-4'>
               
                 <Link to='https://www.facebook.com/share/19KXUsTywG/' className='w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-500'>
                 <FaFacebook />
                 </Link>

                 <Link to='https://twitter.com' className='w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-500'>
                 <FaTwitter />
                 </Link>

                 <Link to='https://linkedin.com' className='w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-500'>
                 <FaLinkedin />
                 </Link>

            </div>
        </div>
       

    </div>
     {/* Bottom section.......... */}
     <div className='border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400'>
        © {new Date().getFullYear()}Sutim Cleaning Services. All rights reserved. | Designed by Babzeeztech solution

        </div>

   </footer>
  )
}

export default FooterComponent