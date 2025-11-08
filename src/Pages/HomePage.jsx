import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div className='mt-4 md:mt-6'>
     <section className='bg-blue-50 py-20 px-6 text-center flex flex-col items-center justify-center'>
      <h1 className='text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-700 mb-4 leading-tight'>
      Sparkling Clean Spaces, Every Time ✨
      </h1>
      <p className='text-gray-600 text-base sm:text-lg max-w-2xl mx-auto mb-6'>
      Professional home and office cleaning services you can trust — from deep cleaning to end-of-tenancy cleanup, we make your space shine beautifully.

      </p>

      <Link to='/Booking' 
      className='bg-blue-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg 
                     hover:bg-blue-700 hover:scale-105 active:scale-100 transition-transform duration-200'
      >
      Book Your Cleaning Now
      </Link>

     </section>
  {/* About services ....... */}
     <section className='py-16 px-6 text-center bg-white'>
      <h2 className='text-2xl md:text-3xl font-bold text-gray-800 mb-6'>About Sutim Cleaning Services</h2>
      <p className='text-gray-600 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed'>
      We are a trusted cleaning agency with a mission to bring comfort, hygiene, and sparkle to homes and offices across Nigeria. Our trained team uses eco-friendly products and advanced cleaning techniques to ensure spotless results.
      </p>

     </section>
      {/* Our services section .... */}
     <section className='py-16 px-6 bg-gray-50'>

      <h2 className='text-2xl md:text-3xl font-bold text-center text-gray-800 mb-10'>
        Our Top Services
      </h2>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 text-center'>

       
        {[
          {title: 'Regular Cleaning', desc: 'Keep your home or office clean on a weekly or monthly schedule.', image : "./Image/cleaningcom2.jpg"},
          {title: 'Deep Cleaning', desc: 'Detailed cleaning for hidden areas — perfect for spring or post-event cleaning.', image: "./Image/cleaningcom3.jpg" },
          {title: 'Office Cleaning', desc: 'Maintain a fresh and productive workspace with our corporate cleaning solutions.', image: "./Image/cleaningcom4.jpg"},
          {title: 'End of Tenancy', desc: 'Move-out cleanups that restore your property to its sparkling best.', image: "./Image/cleaningcom5.jpg"}

        ].map((service, index) => (
          <div 
          key={index}
          className='p-8 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300'
          >
            {/* image...... */}
            <div className='w-full h-40 mb-4 overflow-hidden rounded-lg'>
              <img src={service.image} 
              alt={service.image}
              className='w-full h-full object-cover hover:scale-105 transition-transform duration-300' />

            </div>

            {/* title and description */}
            
            <h3 className='font-semibold text-lg text-blue-600 mb-3'>{service.title}</h3>
            <p className='text-gray-600 text-sm sm:text-base leading-relaxed'>{service.desc}</p>

          </div>
        ))}

      </div>


     </section>
     {/* Call to Action...... */}
     <section className='py-16 bg-blue-600 text-center text-white px-6'>
      <h2 className='text-2xl md:text-3xl font-bold mb-4'
      >
        Ready for a Spotless Home or Office?
        </h2>
      <p className='text-base sm:text-lg mb-8 max-w-xl mx-auto'>
        Book your cleaning appointment today and experience the Suntim touch!
        </p>
      <Link to='/Booking'
      className='bg-white text-blue-700 font-semibold py-3 px-8 rounded-full hover:bg-blue-100 
                     transition-all duration-200 hover:scale-105 active:scale-100'>
      Schedule a Cleaning
      </Link>

     </section>
    </div>
  )
}

export default HomePage