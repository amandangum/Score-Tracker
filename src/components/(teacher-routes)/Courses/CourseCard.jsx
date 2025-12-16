import React from 'react'
import { FaTasks, FaUser } from 'react-icons/fa'

function CourseCard({CourseTitle, CourseDes,CourseCode, CourseIcon, CourseText, CourseIcon2, CourseText2 }) {
  return (
    <div className='md:w-78 min-h-55 shadow-lg rounded-2xl p-4 mt-15 xsm:w-[80%] bg-[#f5f7fa]'>
  
  <div className='w-20 h-10 rounded-full bg-white shadow flex items-center justify-center'>
    <p>{CourseCode}</p>
  </div>
    
    <div className='mt-6'>
        <h1 className='font-bold text-xl'> {CourseTitle} </h1>
        <p className='text-sm mt-2 text-gray-600'>{CourseDes}</p>
    </div>
     
     <div className='h-px bg-gray-300 -mx-4 mt-3'></div>

     <div className='mt-3 flex justify-between'>
        <div className='flex gap-1 items-center text-gray-500'>
            <div>{CourseIcon}</div>
            <p className='text-sm'>{CourseText}</p>
        </div>

        <div className='flex gap-1 items-center text-gray-500'>
           <div>{CourseIcon2}</div>
           <p className='text-sm' >{CourseText2}</p>
        </div>
     </div>

</div>
  )
}

export default CourseCard