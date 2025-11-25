import React from 'react'

function GradesCard({title, Icon, content,numCourses, status, bgColor,textColor}) {
  return (
    <div 
    style={{backgroundColor: bgColor, color: textColor}}
    className={`md:w-75 h-70 shadow-lg rounded-lg p-3 mt-5 xsm:w-[90%]`}>


      <div className='p-2 rounded-lg bg-white/50 w-fit'>{Icon}</div>
      <h1 className='text-xl font-semibold my-3 '>{title}</h1>
      <p >{content}</p>
      <p >{numCourses}</p>
      <p >{status}</p>
      <button className='mt-5 bg-gray-50 rounded-full p-3 hover:cursor-pointer hover:bg-gray-200 '>Click here to view More</button>
    </div>
  )
}

export default GradesCard