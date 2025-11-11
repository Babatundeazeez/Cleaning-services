import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { authContext } from '../AuthContext/AuthContext'
import ModalComponent from '../Components/ModalComponent'

const ContactUs = () => {
  const {register, handleSubmit, reset, formState: {errors}} = useForm()
  const [isLoading, setIsLoading] = useState(false)

  const [content, setContent] = useState("")
  const {showModal,setShowModal,modalStatus, setModalStatus,modalText, setModalText} = useContext(authContext)

  const submitMessage = async(data) =>{
    console.log(data);
    setIsLoading(true)
    const formData = new FormData()
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("phone", data.phone);
    formData.append("message", data.message)

    try {
      const messageURL = import.meta.env.VITE_BASE_URL
      const res = await fetch(`${messageURL}/message`, {
        method: "POST",
        headers: {
          "Content-Type" : "application/json"
        },
        body: JSON.stringify(data)

      });
      const display = await res.json();
      if (display.success){
        setShowModal(true)
        setModalText("Inquiry message sent successfully")
        setModalStatus("success")
        reset()
        setContent("")
       
      }
      else{
        alert("something went wrong")
      }
    } catch (error) {
      console.error("Message error", error);
      alert("server error. Please try again later")
      setModalStatus("Unsuccessfully")
      setModalText("Failed to create booking")
      setShowModal(true)
      
    }finally{
      setIsLoading(false)
    }
    
  }
  return (
    <>
    <div className='mt-10'>
      {/* header section */}
      <section className='bg-blue-600 text-white py-16 text-center px-6 md:px-12'>
        <h1 className='text-3xl md:text-5xl font-extrabold mb-4'>
          Get in Touch With Us 📞
        </h1>
        <p className='text-lg max-w-2xl mx-auto'>
        Have questions or need a custom cleaning service? We’re here to help —
        reach out and we’ll get back to you shortly.
        </p>

      </section>
      {/* contact form section................. */}
       <section className='py-16 px-6 md:px-20 bg-gray-50'>
        <div className='max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center'>
          {/* contact Info */}
          <div>
            <h2 className='text-3xl font-bold text-gray-800 mb-4'>
              Contact Information
            </h2>
            <p className='text-gray-600 mb-6'>
            We’d love to hear from you. Fill out the form or reach us directly
            through the details below.
            </p>
            <div className='space-y-4'>
              <div>
                <h3 className='font-semibold text-blue-600'>Phone</h3>
                <p className='text-gray-700'>+234 816 227 3600</p>
              </div>
              <div>
                <h3 className='font-semibold text-blue-600'>Address</h3>
                <p className='text-gray-700'>Market Square Narberth Pembrokeshire. SA67 7AU</p>
              </div>
              <div>
                <h3 className='font-semibold text-blue-600'>Email</h3>
                <p className='text-gray-700'>info@suntimcleaning.com</p>
              </div>

            </div>

          </div>
          {/* form section/......... */}
          <form action="" className='bg-white p-8 rounded-xl shadow-lg' onSubmit={handleSubmit(submitMessage)}>
            <h2 className='text-2xl font-bold text-gray-800 mb-6'>
            Send Us a Message
            </h2>
            <div className='grid gap-5'>
              <div>
                <label htmlFor="name" className='block text-gray-600 mb-1'> Full Name</label>
                <input 
                type="text" 
                id="name"
                placeholder='Enter your name'
                className='w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none'
                {...register("name", {required: "Name is required"})}
                />
                 {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
              </div>
              {/* Email */}
              <div>
              <label htmlFor="" className='block text-gray-600 mb-1'> Email Address</label>
                <input 
                type="email" 
                name="" 
                id="email"
                placeholder='Enter your email e.g yourname@gmail.com'
                className='w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none'
                {...register("email", {required: "Email is required"})}
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

              </div>
              {/* Phone */}
              <div>
              <label htmlFor="" className='block text-gray-600 mb-1'> Phone Number</label>
                <input 
                type="tel" 
                name="" 
                id="phone"
                placeholder='Enter your Phone e.g +234 000 00000'
                className='w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none'
                {...register("phone")}
                />
                {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}

              </div>
              {/* message */}
              <div>
                <label htmlFor="" className='block text-gray-600 mb-1'>Message</label>
                <textarea 
                name="message" 
                id="message"
                rows="5"
                placeholder='Type your message here................................'
                className='w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none'
                {...register("message")}
                ></textarea>
                 {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
              </div>

              {/* submit button */}
              <button 
              type='submit' 
              className='bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-all font-semibold'
              disable={isLoading}
              >
                {
                  isLoading ? (
                    <>
                    <svg 
                    className='animate-spin h-5 w-5 mr-2 text-white'
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    >
                      <circle 
                      className='opacity-25'
                      cx="12"
                      cy="12"
                      r="10"
                      stroke='currentColor'
                      strokeWidth="4"
                      >
                      </circle>
                      <path 
                      className='opacity-75'
                      fill='currentColor'
                       d="M4 12a8 8 0 018-8v8H4z"
                      >
                      </path>
  
                    </svg>
                    Sending .......
                    </>
                  ) : ( "Submit Message")
                }
                Send Message

              </button>
              <ModalComponent
               show={showModal}
               onClose={()=> setShowModal(false)}
               title={modalStatus}
               message={modalText}
               />

            </div>

          </form>

        </div>

       </section>
       
    </div>
    
    </>
    
  )
}

export default ContactUs