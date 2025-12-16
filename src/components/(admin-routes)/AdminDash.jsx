import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import DashboardNav from '../../nav/DashboardNav'
import { adminRoute } from '../../Scripts/Sidebar-routes'
import Dashboard from './Dashboard/Dashboard'

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

   <div className={`${sidebarOpen ? "md:ml-75" : "ml-18 w-[88%]"} mt-15 pt-20`} >
       <h1 className='text-2xl font-medium'>Dashboard</h1>

        <Dashboard />
   </div>
   
   </div>
  )
}

export default AdminDash