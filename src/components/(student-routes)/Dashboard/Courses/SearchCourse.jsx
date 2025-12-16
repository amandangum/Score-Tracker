import React from 'react'
import { Search } from 'lucide-react'

function SearchCourse() {
  return (
    <div>
      <div>
        <select 
        name="" 
        id=""
        type="text" 
        defaultValue='Enroll into a Course'
        className='text-gray-500 border mt-5 py-3 md:w-[87%] px-3 rounded-2xl focus:outline-none xsm:w-[65%]'

        >
        <option value="">Enroll into a Course</option>
        <option value="">Database Design</option>
        <option value="">Mobile App Dev</option>
        <option value="">OOP with Java</option>
        <option value="">Embedded Systems</option>
        <option value="">Distributed Programming</option>
       </select>

       <button className='bg-blue-400 md:w-[10%] rounded-lg p-3 cursor-pointer hover:bg-blue-500 ml-3 shadow xsm:mt-3'>Enroll</button>
      </div>
      
      
 </div>
  )
}

export default SearchCourse