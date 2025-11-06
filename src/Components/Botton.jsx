import React from 'react'

const Botton = ({children, variant="primary", onClick}) => {
    const myBtn = "px-4 py-2 rounded-lg font-semibold transition duration-200";
    const variants = {
        primary: "bg-blue-600 text-white hover:bg-blue-700",
        secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300 ml-auto md:hidden focus:outline-none",
        danger: "bg-red-600 text-white hover:bg-red-700",
        warning: "bg-yellow-400 text-white hover:bg-yellow-800",
        success: "bg-green-400 text-white hover:bg-green-800",
    }
    
  return (

   <div>
     <button onClick={onClick} className={`${myBtn} ${variants[variant]}`}>{children}</button>
   </div>
  )
}

export default Botton