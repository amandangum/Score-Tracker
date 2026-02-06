import React from 'react'
import Sidebar from '../../Sidebar/Sidebar'
import DashboardNav from '../../../nav/DashboardNav'
import { adminRoute } from '../../../Scripts/Sidebar-routes'
import CoursesSection from './CourseSection'

function AdminCourses({sidebarOpen, setSidebarOpen}) {
  return (
    <div>
    <div >
      
      <DashboardNav/>
    <Sidebar 
    routes={adminRoute} 
    sidebarOpen={sidebarOpen} 
    setSidebarOpen={setSidebarOpen}/>
   </div>

   <div className={`${sidebarOpen ? "md:ml-75" : "ml-18 w-[88%]"} mt-15 pt-20`} >

       <CoursesSection />
   </div>
              
   </div>
  )
}

export default AdminCourses