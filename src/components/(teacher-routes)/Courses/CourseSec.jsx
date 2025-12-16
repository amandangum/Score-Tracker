import React from 'react'
import { FaPlus } from 'react-icons/fa'

function CourseSec() {
  return (
    <div>

        <div className='flex justify-between items-center mt-10'>
            <div><h1 className='text-xl font-medium'> My Courses</h1></div>
            
            <div className='flex items-center gap-4 md:mr-10 xsm:mr-15'>
                 <button className=' text-white border-none bg-[#009adb] rounded-lg px-3 py-3 cursor-pointer transition-all duration-300 ease-in-out shadow-lg border flex items-center gap-2 hover:bg-[#2980b9]'>
                    <FaPlus size={15} /> Add New Course
                 </button>
            </div>
           </div>
    </div>
  )
}

export default CourseSec