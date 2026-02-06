import React from 'react'
import DashboardNav from '../../../nav/DashboardNav'
import Sidebar from '../../Sidebar/Sidebar'
import { lecturerRoute } from '../../../Scripts/Sidebar-routes'
import ScoreEntryTable from './ScoreTable'

function ScoreEntry({sidebarOpen, setSidebarOpen}) {
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
             
             <ScoreEntryTable />
       </div>
    </div>
  )
}

export default ScoreEntry