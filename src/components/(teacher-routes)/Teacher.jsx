import React from 'react'
import Sidebar from '../Sidebar/Sidebar';
import { lecturerRoute } from '../../Scripts/Sidebar-routes';
import DashboardNav from '../../nav/DashboardNav';
import Dashboard from './Dashboard/Dashboard'

function TeacherDash({sidebarOpen, setSidebarOpen }) {
  return (
    <div>
    <div >
      
      <DashboardNav/>
    <Sidebar 
    routes={lecturerRoute} 
    sidebarOpen={sidebarOpen} 
    setSidebarOpen={setSidebarOpen}/>
   </div>

   <div className={`${sidebarOpen ? "md:ml-75" : "ml-18 w-[88%]"} mt-15 pt-20`}>
       <h1 className='text-2xl font-medium'>Dashboard</h1>
         
         <div>
          <Dashboard/>
             
         </div>
          
   </div>
   
   </div>
  )
}

export default TeacherDash;