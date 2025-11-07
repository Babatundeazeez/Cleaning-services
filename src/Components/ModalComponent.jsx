import React from 'react'

const ModalComponent = ({title, show, message, onClose}) => {

    if (!show) return null; // Hide modal when not shown

  const isSuccess = title?.toLowerCase() === "success";
  
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 transition-all duration-300"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl w-11/12 max-w-md transform transition-all scale-100 sm:scale-100"
        onClick={(e) => e.stopPropagation()} // prevent close on inner click
      >
        {/* Header */}
        <div className="flex justify-between items-center border-b px-6 py-4">
          <h3
            className={`text-xl font-bold text-center w-full ${
              isSuccess ? "text-green-600" : "text-red-600"
            }`}
          >
            {title}
          </h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors text-2xl"
          >
            &times;
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-6 text-center">
          <p className="text-gray-700 text-base">{message}</p>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t text-center">
          <button
            onClick={onClose}
            className={`${
              isSuccess
                ? "bg-green-600 hover:bg-green-700"
                : "bg-red-600 hover:bg-red-700"
            } text-white font-semibold py-2 px-6 rounded-full transition-all`}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

export default ModalComponent