import React from 'react'
import { Link } from 'react-router-dom'
import {CheckCircle} from 'lucide-react'
import WhatwedoComponent from '../Components/WhatwedoComponent'


const AboutUs = () => {
  return (
    <div className='mt-6 text-gray-800'>
     
      {/* Hero section.... */}
      <section className='relative bg-green-50 py-20 px-6 md:px-20 text-center'>
        <h1 className='text-4xl md:text-5xl font-extrabold text-green-700 mb-4'>
        About Suntim Cleaning Services
        </h1>
        <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
        We are professional cleaning company committed to providing safe and reliable cleaning solutions for homes and offices
        </p>

      </section>

      {/* Who we are....... */}
      <section className='py-16 px-6 md:px-20 grid md:grid-cols-2 gap-10 items-center'>
        <div>
          <h2 className='text-3xl font-bold text-green-700 mb-4'>Who we Are</h2>
          <p className='text-gray-700 leading-relaxed mb-4'>
            At <strong>Suntim Cleaning Services</strong>, we are dedicated to providing
            top-quality residential and commercial cleaning services. As a division of <strong>Suntim Healthcare Services Ltd</strong>, our operations reflect
            the same precision, care, and professionalism that define our brand.
          </p>
          <p className='text-gray-700 leading-relaxed'>
          Our goal is simple — to create <strong>clean, healthy, and inspiring
          spaces</strong> for homes, offices, and public environments.
          </p>
        </div>
        <div>
          <img 
          src="./Image/image1.jpeg" 
          alt="image"
          className='rounded-2xl shadow-lg w-full max-w-md object-cover' />
        </div>
      </section>

      {/* what we do...... */}
      <section className='bg-green-50 py-16 px-6 md:px-20'>
        <h2 className='text-3xl font-bold text-green-700 mb-8 text-center'>
          What We Do
        </h2>

        <WhatwedoComponent />
       
      </section>

      {/* Why Choose Us....... */}
      <section className='py-16 px-6 md:px-20'>
        <h2 className='text-3xl font-bold text-green-700 mb-8 text-center'>
          Why Choose Us
        </h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {[
            'Professionally trained cleaning staff',
            'Eco-friendly cleaning materials',
            'Affordable and transparent pricing',
            'Guaranteed customer satisfaction',
            'Flexible scheduling options',
            'Trusted by homes and businesses'
          ].map((reason, myIndex) => (
            <div
            key={myIndex}
            className='bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:border-green-500 transition-all'>
              <h3 className='text-lg font-semibold text-gray-800'>{reason}</h3>

            </div>
          ))}

        </div>
      </section>
      {/* Call To Action..... */}
      <section className='bg-green-700 py-16 px-6 md:px-20 text-center text-white'>
        <h2 className='text-3xl font-bold mb-4'>
        Let’s Keep Your Space Clean
        </h2>
        <p className='text-lg max-w-2xl mx-auto mb-6'>
        Whether you need a one-time deep clean or regular maintenance,<strong> Suntim Cleaning Services</strong> is here to help you maintain freshness and comfort every day.

        </p>
        
        <Link to="/Booking" 
        className='bg-white text-green-700 font-bold py-3 px-8 rounded-full shadow-md hover:bg-green-100 transition'> 
        Book a Cleaning Service</Link>

      </section>

    </div>
  )
}

export default AboutUs