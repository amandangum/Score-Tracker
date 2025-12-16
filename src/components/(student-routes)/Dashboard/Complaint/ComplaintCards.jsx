import React from 'react'

function ComplaintCards({title, content, bgColor, textColor}) {
  return (
    
   
 <div
      style={{ backgroundColor: bgColor, color: textColor }}
      className="md:w-60 min-h-32 shadow-lg rounded-2xl p-4 mt-8 xsm:w-[90%] text-center"
    >
    <h2 className="text-lg font-semibold">{title}</h2>
    <p className="text-2xl font-bold mt-2">{content}</p>

  </div>

  )
}

export default ComplaintCards