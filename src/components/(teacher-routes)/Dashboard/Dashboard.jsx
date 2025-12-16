import React from 'react'
import LecturerCard from './LecturerCard'
import { Book } from 'lucide-react'
import { FaBookOpen, FaCalendarAlt, FaTasks, FaUserGraduate } from 'react-icons/fa'
import Annoucement from './Annoucement'

function Dashboard() {
  return (
    <div>
      <div className='md:flex items-center gap-8'>

      <LecturerCard
        Icon={<FaBookOpen />}
        title="Total Courses "
        content={3}
        bgColor="#f5f7fa"
        textColor="#5F6673"
       />
       <LecturerCard
        Icon={<FaUserGraduate />}
        title="Total Students "
        content={10}
        bgColor="#FFE08F"
        textColor="#6B521B"
       />
       <LecturerCard
        Icon={<FaTasks />}
        title="Pending Assignments "
        content={3}
        bgColor="#E1E0EA"
        textColor="#46454C"
       />
       <LecturerCard
        Icon={<FaCalendarAlt />}
        title="Classes Today"
        content={4}
        bgColor="#AED3E0"
        textColor="#1A333C"
       />
    </div>
          <div className='mt-15 w-[94%] shadow rounded-2xl p-5'>
            <h1 className='text-xl font-semibold'>Upcoming Classes</h1>
          <Annoucement 
         title={"Embedded System"}
         venue={"Level 3, Hall Two"}
         time={"4:00pm - 6:00pm"}
         />
         <Annoucement 
         title={"Data Structure"}
         venue={"Level 1, Hall Three"}
         time={"10:00am - 12:00pm"}
         />
         <Annoucement 
         title={"Web Development"}
         venue={"Level 3, Hall Two"}
         time={"4:00pm - 6:00pm"}
         />
          </div>
        
    </div>
    
  )
}

export default Dashboard