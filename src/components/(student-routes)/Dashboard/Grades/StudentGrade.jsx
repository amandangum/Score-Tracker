import React from "react";
import Sidebar from "../../../Sidebar/Sidebar";
import DashboardNav from "../../../../nav/DashboardNav";
import { StudentsRoute } from "../../../../Scripts/Sidebar-routes";
import DashboardCard from "../../../dashboard/DashboardCard";
import GradesCard from "./GradesCard";
import Announcement from "./Announcement";
import { GraduationCap } from "lucide-react";

function StudentGrade({ sidebarOpen, setSidebarOpen }) {
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

      <div
        className={`${sidebarOpen ? "md:ml-75" : "ml-18 w-[88%]"} mt-15 pt-20`}
      >
        <h1 className="text-2xl font-medium">Welcome to your Grades Portal</h1>
        <p className="font-medium text-gray-400 w-200 mt-3">Access your academic performance record, track your progress, and review detailed results from all completed semesters and terms.
          Select the semester below to view your result, GPA and grade.
        </p>
     
        <div className='flex items-center gap-8 flex-wrap mt-10 hover:cursor-pointer'>
        <GradesCard
        Icon={<GraduationCap />}
        title="Semester One Results"
        content={"GPA: 3"}
        numCourses={"Number of courses written: 9"}
        status={"Status: Passed"}
        bgColor="#FFB693"
        textColor="#CC5F35"
         />
       
         <GradesCard
        Icon={<GraduationCap />}
        title="Semester Two Results"
        content={"GPA: 2.5"}
        numCourses={"Number of courses written: 5"}
        status={"Status: Passed"}
        bgColor="#F9E7D1"
        textColor="#E67E"
         />

         <GradesCard
        Icon={<GraduationCap />}
        title="Semester Three Results"
        content={"GPA: 1.5"}
        numCourses={"Number of courses written: 5"}
        status={"Status: Failed                                                                                        "}
        bgColor="#DCE6CD"
        textColor="#628141"
         />
       </div>
          

          <div className="mt-15">
            
            <Announcement />
      </div>
    </div>
    </div>
    
  );
}

export default StudentGrade;
