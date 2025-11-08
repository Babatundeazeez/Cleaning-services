import { CheckCheck } from 'lucide-react'
import React from 'react'

const WhatwedoComponent = () => {
    const services = [
        {
            title : "Regular Home & Office Cleaning",
            image : "./Image/Istockimage3.webp"
        },
        {
            title : "Deep Cleaning Services",
            image : "./Image/Istockimage2.jpg"
        },
        {
            title : "Surface & Floor Cleaning",
            image : "./Image/Istockimage4.webp"
        },
        {
            title : "End-of-Tenancy Cleaning",
            image : "./Image/Istockimage6.webp"
        },
        {
            title : "Post-Renovation Cleanup",
            image : "./Image/IstockImage.jpg"
        },
        {
            title : "Custom Maintenance Plans",
            image : "./Image/cleaningcom.jpg"
        }
    ]
  return (
   <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-8'>
            {
                services.map((service, index) =>(
                    <div
                    key={index}
                    className='bg-white border border-green-100 rounded-xl shadow-md hover:shadow-lg transition-all overflow-hidden'>
                        {/* image section */}
                        <div className='w-full h-48'>
                            <img src={service.image} 
                            alt={service.title}
                            className='w-full h-full object-cover'
                            
                            />

                        </div>
                        {/* content... */}
                        <div className='flex items-center space-x-3 p-6'>
                            <CheckCheck className='text-green-600 w-6 h-6 flex-shrink-0' />
                            <p className='font-semibold text-gray-700'>
                                {service.title}
                            </p>

                        </div>

                    </div>
                ))
            }

   </div>
  )
}

export default WhatwedoComponent