import React from 'react'
import Sidebar from '../../../Sidebar/Sidebar'
import DashboardNav from '../../../../nav/DashboardNav'
import { StudentsRoute } from '../../../../Scripts/Sidebar-routes'
import SearchCourse from './SearchCourse'
import DashBoardCourses from './DashBoardCourses'
import CourseCards from './CourseCards'
import { Book } from 'lucide-react'
import CourseStats from './CourseStats'
import { FaUser } from 'react-icons/fa6'
import { FaBookOpen, FaUserGraduate } from 'react-icons/fa'

function StudentCourses({sidebarOpen, setSidebarOpen}) {
  return (
    <div>
      <div>
        <DashboardNav />
         
         <Sidebar
         routes={StudentsRoute}
         sidebarOpen={sidebarOpen}
         setSidebarOpen={setSidebarOpen}
          />
          </div>
          <div className={`${sidebarOpen ? "md:ml-75" : "ml-18 w-[88%]"} mt-15 pt-20`} >
         <h1 className='text-2xl font-medium'>Courses</h1>
                     

         <div>

         </div>
         <div className='md:flex items-center gap-10'>
             <CourseCards
          Icon={<FaUserGraduate />}
        title="Total Courses for semester 1"
        content={10}
        bgColor="#E1E0EA"
        textColor="#46454C"
            />

           <CourseCards
          Icon={<FaBookOpen />}
        title="Total Courses Enrolled for"
        content={3}
        bgColor="#e3f4ff"
        textColor="#4A84BF"
            />
            <CourseCards
          Icon={<Book />}
        title="Total General Courses"
        content={5}
        bgColor="#ffdee3"
        textColor="#7A5457"
            />
         </div>
          
            <div className='mt-9'>
              <SearchCourse />
            </div>
           
          <DashBoardCourses />
           
          <CourseStats />
          </div>
              
        

    </div>
  )
}

export default StudentCourses