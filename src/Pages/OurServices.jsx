import React from 'react'
import { Link } from 'react-router-dom'

const OurServices = () => {
  return (
    <div className='bg-gray-50 text-gray-800'>
      {/* Hero section............ */}
      <section className='bg-blue-600 text-white py-16 px-6 text-center'>
        <h1 className='text-3xl md:text-5xl font-extrabold mb-4'>
        Our Professional Cleaning Services
        </h1>
        <p className='max-w-2xl mx-auto text-lg md:text-xl text-blue-100'>
        Delivering comfort, hygiene, and sparkle to every space — from homes to offices, across Nigeria.
        </p>

      </section>
      {/* servics list..............j */}
      <section className='py-16 px-6 max-w-6xl mx-auto'>
        <h2 className='text-2xl md:text-3xl font-bold text-center mb-10 text-blue-700'>
          What we Offer
        </h2>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>

          {/* Residential cleaning............ */}
          <div className='bg-white rounded-xl shadow hover:shadow-lg transition-all p-6'>
            <h3 className='text-xl font-semibold text-blue-600 mb-3'>🏠 Residential Cleaning</h3>
            <p className='text-gray-600 mb-3'>
            Keep your home spotless with our regular cleaning packages — weekly, biweekly, or monthly.
            </p>
            <ul className='list-disc text-sm text-gray-500 ml-5 space-y-1'>
              <li>Dusting, vacuuming & mopping</li>
              <li>Bathroom & kitchen sanitization</li>
              <li>Appliance & upholstery cleaning</li>

            </ul>

          </div>
          {/* Deep cleaning................ */}
          <div className='bg-white rounded-xl shadow hover:shadow-lg transition-all p-6'>
            <h3 className='text-xl font-semibold text-blue-600 mb-3'>🧽 Deep Cleaning</h3>
            <p className='text-gray-600 mb-3'>
            A total refresh for your space — great for spring cleaning or after special events.
            </p>
            <ul className='list-disc text-sm text-gray-500 ml-5 space-y-1'>
              <li>Walls, windows & baseboards</li>
              <li>Furniture, curtains & carpets</li>
              <li>Intensive disinfection for hygiene</li>

            </ul>

          </div>
          {/* Office Cleaning ............... */}
          <div className='bg-white rounded-xl shadow hover:shadow-lg transition-all p-6'>
            <h3 className='text-xl font-semibold text-blue-600 mb-3'>🏢 Office & Commercial Cleaning</h3>
            <p className='text-gray-600 mb-3'>
            Create a clean, productive workspace with our flexible office cleaning schedules.
            </p>
            <ul className='list-disc text-sm text-gray-500 ml-5 space-y-1'>
                <li>Daily, weekly, or monthly cleaning</li>
                <li>Restroom & shared area sanitization</li>
                <li>Waste management services</li>

            </ul>

          </div>
          {/* End of Tenancy....................... */}

          <div className="bg-white rounded-xl shadow hover:shadow-lg transition-all p-6">

            <h3 className="text-xl font-semibold text-blue-600 mb-3">🧳 End-of-Tenancy Cleaning</h3>
            <p className="text-gray-600 mb-3">
              Moving out? We’ll restore your property to its sparkling best — stress-free.
            </p>

            <ul className="list-disc text-sm text-gray-500 ml-5 space-y-1">
              <li>Full-room deep cleaning</li>
              <li>Appliance & cabinet detailing</li>
              <li>Pre-inspection readiness</li>
            </ul>
          </div>

            {/* Post Construction */}

            <div className="bg-white rounded-xl shadow hover:shadow-lg transition-all p-6">
            <h3 className="text-xl font-semibold text-blue-600 mb-3">🧱 Post-Construction Cleaning</h3>
            <p className="text-gray-600 mb-3">
              We remove dust, debris, and paint residues after renovation or construction.
            </p>
            <ul className="list-disc text-sm text-gray-500 ml-5 space-y-1">
              <li>Safe debris removal</li>
              <li>Floor & fixture polishing</li>
              <li>Window & surface cleaning</li>
            </ul>
          </div>

            {/* Special Cleaning */}

          <div className="bg-white rounded-xl shadow hover:shadow-lg transition-all p-6">
            <h3 className="text-xl font-semibold text-blue-600 mb-3">🌿 Specialized Cleaning</h3>
            <p className="text-gray-600 mb-3">
              Tailored cleaning for special needs and events — using safe, eco-friendly products.
            </p>

            <ul className="list-disc text-sm text-gray-500 ml-5 space-y-1">
              <li>Carpet & upholstery cleaning</li>
              <li>Event & post-party cleanup</li>
              <li>Sanitization & disinfection</li>
            </ul>
          </div>



        </div>
      </section>

      {/* Why choose us */}
      <section className='bg-blue-50 py-16 text-center px-6'>
      <h2 className="text-2xl md:text-3xl font-bold text-blue-700 mb-6">
        Why Choose Suntim Cleaning Services?
      </h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto text-gray-700'>
      <div>
            <h3 className="font-semibold text-lg mb-2">✅ Trained & Trusted Team</h3>
            <p className="text-sm">Experienced professionals delivering quality results every time.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">🌱 Eco-Friendly Products</h3>
            <p className="text-sm">Safe cleaning solutions that protect your health and environment.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">📅 Flexible Scheduling</h3>
            <p className="text-sm">We work around your routine — on time, every time.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">💰 Affordable Rates</h3>
            <p className="text-sm">Transparent pricing with no hidden fees.</p>
          </div>

      </div>

      </section>

      {/* Call to action........... */}
      <section className='bg-blue-600 text-white py-14 text-center px-6'>
        <h2 className='text-2xl md:text-3xl font-bold mb-4'>Experience the Suntim Sparkle Today!</h2>
        <p className='text-blue-100 mb-6 max-w-2xl mx-auto'>
        Book your cleaning appointment now and enjoy spotless, stress-free spaces.
        </p>

        <Link to='/Booking'
        className='bg-white text-blue-700 font-semibold py-3 px-8 rounded-full hover:bg-gray-100 transition-all'>
        Book Your Cleaning Now
        </Link>

      </section>
      
    </div>
  )
}

export default OurServices