import React from 'react'

function DashboardCard({title, Icon, content, bgColor,textColor}) {
  return (
    <div 
    style={{backgroundColor: bgColor, color: textColor}}
    className={`md:w-75 h-40 shadow-lg rounded-lg p-3 mt-5 xsm:w-[90%]`}>


      <div className='p-2 rounded-lg bg-white/50 w-fit'>{Icon}</div>
      <h1 className='text-xl font-semibold my-3 '>{title}</h1>
      <p className='text-3xl '>{content}</p>
    </div>
  )
}

export default DashboardCard