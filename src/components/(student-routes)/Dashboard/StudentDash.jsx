import React from 'react'
import Sidebar from '../../Sidebar/Sidebar';
import { StudentsRoute } from '../../../Scripts/Sidebar-routes';
import DashboardNav from '../../../nav/DashboardNav';
import DashboardCard from '../../dashboard/DashboardCard';
import { Book, BookOpen, GraduationCap } from 'lucide-react';
import Announcements from '../../dashboard/Announcements';
import StudentRanking from '../../dashboard/StudentRanking';

function StudentDash({sidebarOpen, setSidebarOpen }) {
  return (
   <div>
    <div>
      
      <DashboardNav/>
    <Sidebar 
    routes={StudentsRoute} 
    sidebarOpen={sidebarOpen} 
    setSidebarOpen={setSidebarOpen}/>
   </div>

   <div className={`${sidebarOpen ? "md:ml-75" : "ml-18 w-[88%]"} mt-15 pt-20`} >
       <h1 className='text-2xl font-medium'>Dashboard</h1>


       <div className='flex items-center gap-3 flex-wrap'> 
        <DashboardCard
        Icon={<Book />}
        title="Total Courses"
        content={10}
        bgColor="#DCE6CD"
        textColor="#628141"
         />
       
         <DashboardCard
        Icon={<BookOpen />}
        title="Average Grade"
        content={"B+"}
        bgColor="#F9E7D1"
        textColor="#E67E"
         />

         <DashboardCard
        Icon={<GraduationCap />}
        title="Semester One GPA"
        content={3.35}
        bgColor="#DCE6CD"
        textColor="#628141"
         />
       </div>


       <div className='mt-8'>
        <h1 className='font-medium text-2xl'>Announcements</h1>
          <Announcements />
       </div>

       <div className='mt-10'>
        <h1 className='font-medium text-2xl'>Student Ranking</h1>
        <StudentRanking />
       </div>
   </div>
   
   </div>
    
    
  )

}
export default StudentDash; 