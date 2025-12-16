import React from 'react'
import Sidebar from '../../Sidebar/Sidebar'
import { lecturerRoute } from '../../../Scripts/Sidebar-routes'
import DashboardNav from '../../../nav/DashboardNav'
import CourseSec from './CourseSec'
import CourseCard from './CourseCard'
import { FaTasks, FaUser, FaUserGraduate } from 'react-icons/fa'

function LectCourses({sidebarOpen, setSidebarOpen}) {
  return (
    <div>
      <div>
        <DashboardNav />
        <Sidebar
        routes={lecturerRoute}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
         />
      </div>

      <div className={`${sidebarOpen ? "md:ml-75" : "ml-18 w-[88%]"} mt-15 pt-20`}>
       <h1 className='text-2xl font-bold'>Courses</h1>
            
            <CourseSec />
            <div className='md:flex items-center gap-10'>
                <CourseCard 
            CourseCode={"CS201"}
            CourseTitle={"Embedded Systems"}
            CourseDes={"Design and analysis of efficient algorithms for complex computational problems."}
            CourseIcon={<FaUserGraduate />}
            CourseText={"15 students"}
            CourseIcon2={<FaTasks />}
            CourseText2={"3 assignments"}
            />
            <CourseCard 
            CourseCode={"CS202"}
            CourseTitle={"Data Structures"}
            CourseDes={"Fundamental data structures and their applications in software development."}
            CourseIcon={<FaUserGraduate />}
            CourseText={"15 students"}
            CourseIcon2={<FaTasks />}
            CourseText2={"0 assignment"}
            />
            <CourseCard 
            CourseCode={"CS203"}
            CourseTitle={"Web Development"}
            CourseDes={"Modern web development techniques including HTML5, CSS3, and JavaScript."}
            CourseIcon={<FaUserGraduate />}
            CourseText={"15 students"}
            CourseIcon2={<FaTasks />}
            CourseText2={"2 assignments"}
            />
            </div>
            
       </div>
    </div>
  )
}

export default LectCourses