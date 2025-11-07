import React, { useState } from 'react'
import {useForm} from 'react-hook-form'

const Booking = () => {

  const {register, handleSubmit, formState: {errors}} = useForm()


  const [isLoading, setIsLoading] = useState(false)

  const onSubmit = async(data) =>{
    //console.log(data);
    setIsLoading(true)
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("phone", data.phone);
    formData.append("service", data.service);
    formData.append("date", data.date);
    formData.append("message", data.message)
    //alert("Form submitted successfully")

    try {
      const res = await fetch("http://localhost:3000/api/booking", {
        method : "POST",
        headers: {
          "Content-Type" : "application/json"
        },
        body: JSON.stringify(data)
      });

      const shows = await res.json();
      if (shows.success){
        alert("Booking submitted successfully")
      }
      else{
        alert("something went wrong")
      }
    } catch (error) {
        console.error("Booking error", error);
        alert("server error. please try again later")
      
    }finally{
      setIsLoading(false)
    }

    
    
  }
  return (
    < >
    <div className='bg-gray-50 min-h-screen py-12 px-6'>
      {/* Hero sectionss.. */}
      <section className='text-center mb-12'>
      <h1 className="text-3xl md:text-5xl font-extrabold text-blue-700 mb-4">
          Book Your Cleaning Service 🧼
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Schedule a cleaning appointment with Suntim Cleaning Services — quick, easy, and reliable.
        </p>

      </section>
      {/* form section Page................. */}
      <div className='max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-8 md:p-12'>

      <form action="" className='grid grid-cols-1 md:grid-cols-2 gap-6' onSubmit={handleSubmit(onSubmit)}>
        {/* For full Name........ */}
        <div>
          <label htmlFor="name" className='block text-sm font-semibold text-gray-700 mb-2'>Full Name</label>

          <input 
          type="text" 
          id='name' 
          placeholder='Enter your full name' 
          className='w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500' 
          {...register("name", {required: "Name is required"})}
           />
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}

        </div>
        {/* For email address....... */}

        <div>
          <label htmlFor="" className='block text-sm font-semibold text-gray-700 mb-2'>Email Address: </label>

          <input 
          type="text" 
          id='email' 
          placeholder='Enter your email e.g you@example.com' 
          className='w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500' 
          {...register("email", {required: "Email is required"})}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>

        {/* For phone number....... */}
       <div>
       <label htmlFor="phone" className='block text-sm font-semibold text-gray-700 mb-2'>Phone Number</label>
        <input type="tel"
        id='phone'
        placeholder='e.g +234 810 018 66661'
        className='w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500'
        {...register("phone", {required: "Phone number is required"})} />
         {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
       </div>
       {/* For Services type....... */}

       <div>
        <label htmlFor="service" className='block text-sm font-semibold text-gray-700 mb-2'>Services Type</label>
        <select 
        name="service" 
        id="service"
        className='w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500'
        {...register("service", {required: "service type is required"})}
        >
          <option value="">Select a Service</option>
          <option value="Regular Cleaning">Regular Cleaning</option>
          <option value="Deep Cleaning">Deep Cleaning</option>
          <option value="Office Cleaning">Office Cleaning</option>
          <option value="End of Tenancy Cleaning">End of Tenancy Cleaning</option>
          <option value="Post Construction Cleaning">Post Construction Cleaning</option>
        </select>
       </div>

       {/* Prefered Date...... */}
       <div>
        <label htmlFor="" className='block text-sm font-semibold text-gray-700 mb-2'>Preferred Date</label>
        <input 
        type="date" 
        name="date" 
        id="date"
        className='w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500'
        {...register("date")}
         />
       </div>

       {/* Message/....... */}
       <div className='md:col-span-2'>
        <label htmlFor="" className='block text-sm font-semibold text-gray-700 mb-2'>Additional Message</label>
        <textarea 
        name="message" 
        id="message"
        rows="4"
        className='w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500'
        {...register("message", {required: "message is required"})}
        
        ></textarea>

       </div>

        {/* Submit button */}
        <div className='md:col-span-2 text-center mt-6'>
        <button
              type="submit"
              className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-full hover:bg-blue-700 transition-all"
            >
              Submit Booking
            </button>

        </div>


      </form>
      </div>
      {/* Extral information */}
      <section className='text-center mt-16'>
      <h2 className="text-xl md:text-2xl font-bold text-blue-700 mb-3">Need Help Booking?</h2>
        <p className="text-gray-600">
          Call our support team at <span className="font-semibold text-blue-600">+234 800 123 4567</span> <br />
          or email us at <span className="font-semibold text-blue-600">info@suntimcleaning.com</span>
        </p>

      </section>

      
      </div>
    </>
  )
}

export default Booking