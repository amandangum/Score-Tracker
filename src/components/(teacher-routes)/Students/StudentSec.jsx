import React from 'react'
import Sidebar from '../../Sidebar/Sidebar'
import { lecturerRoute } from '../../../Scripts/Sidebar-routes'
import DashboardNav from '../../../nav/DashboardNav'
import Users from './StudentTable'


function StudentSec({sidebarOpen, setSidebarOpen}) {
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

        <div className={`${sidebarOpen ? "ml-75" : "ml-20"} mt-35`}>
             
             <Users />
       </div>
    </div>
  )
}

export default StudentSec