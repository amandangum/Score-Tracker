import React from 'react'
import Sidebar from '../../../Sidebar/Sidebar'
import DashboardNav from '../../../../nav/DashboardNav'
import { StudentsRoute } from '../../../../Scripts/Sidebar-routes'
import ComplaintsSection from './ComplaintDash'


function Complaint({sidebarOpen, setSidebarOpen}) {
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
         <h1 className='text-2xl font-medium'>Complaints</h1>

            <ComplaintsSection />

         </div>
    </div>
  )
}

export default Complaint