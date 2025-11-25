import React from 'react'
import { Bell } from 'lucide-react'

function Announcements() {
  return (
    <div className='mt-5 w-[99%] shadow rounded-2xl p-5'> 
    <h1 className='text-lg font-semibold'>Upcoming Exams</h1>

    <div className='flex items-center gap-10 mt-3 flex-wrap'>
        <div >Analysis</div>
        <h1 style={{backgroundColor:"#F9E7D1", color:"#E67E"}} className='rounded-full p-3'>Tuesday 10th Dec</h1>

        <button className='rounded-full flex items-center gap-2 shadow-lg  cursor-pointer px-5 py-2 bg-gray-200
     hover:bg-gray-500 duration-300 transition-all ease-in-out hover:text-white'>
        <Bell size={16}/> 
     <p>Remind Me</p>
     </button>
    </div>

    <h1 className='text-lg font-semibold mt-5'>Exam Release Dates</h1>

    <div className='flex items-center gap-10 mt-3 flex-wrap'>
        <div >Analysis</div>
        <h1 style={{backgroundColor:"#DCE6CD", color:"#628141"}} className='rounded-full p-3'>Tuesday 10th Dec</h1>

        <button className='rounded-full flex items-center gap-2 shadow-lg  cursor-pointer px-5 py-2 bg-gray-200
     hover:bg-gray-500 duration-300 transition-all ease-in-out hover:text-white'>
        <Bell size={16}/> 
     <p>Remind Me</p>
     </button>
    </div>

    </div>
  )
}

export default Announcements