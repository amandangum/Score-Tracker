import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import DashboardNav from '../../nav/DashboardNav'
import { adminRoute } from '../../Scripts/Sidebar-routes'

function AdminDash({sidebarOpen, setSidebarOpen}) {
  return (
    <div>
    <div >
      
      <DashboardNav/>
    <Sidebar 
    routes={adminRoute} 
    sidebarOpen={sidebarOpen} 
    setSidebarOpen={setSidebarOpen}/>
   </div>

   <div className={`${sidebarOpen ? "ml-75" : "ml-20"} mt-6`} >
       <h1 className='text-2xl font-medium'>Dashboard</h1>
   </div>
   
   </div>
  )
}

export default AdminDash