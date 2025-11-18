import React from 'react'
import Sidebar from '../../Sidebar/Sidebar';
import { StudentsRoute } from '../../../Scripts/Sidebar-routes';
import DashboardNav from '../../../nav/DashboardNav';

function StudentDash({sidebarOpen, setSidebarOpen }) {
  return (
   <div>
    <div >
      
      <DashboardNav/>
    <Sidebar 
    routes={StudentsRoute} 
    sidebarOpen={sidebarOpen} 
    setSidebarOpen={setSidebarOpen}/>
   </div>

   <div className={`${sidebarOpen ? "ml-75" : "ml-20"} mt-6`} >
       <h1 className='text-2xl font-medium'>Dashboard</h1>
   </div>
   
   </div>
    
    
  )

}
export default StudentDash; 