import React from "react";
import Sidebar from "../../../Sidebar/Sidebar";
import DashboardNav from "../../../../nav/DashboardNav";
import { StudentsRoute } from "../../../../Scripts/Sidebar-routes";
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
        <p className="font-medium text-gray-400 md:w-200 xsm:w-85 mt-3">Access your academic performance record, track your progress, and review detailed results from all completed semesters and terms.
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
         tableData={[
    { course: "Digital Literacy", credit: 5, CA: "10", exam:"80" , final:"90", grade: "A" },
    { course: "Mobile Programming", credit: 4, CA: "10", exam:"85", final:"95", grade: "A+" },
    { course: "Digital Electronic", credit: 3, CA: "18",  exam:"62", final:"80", grade: "B" },
         ]}
         />
       
         <GradesCard
        Icon={<GraduationCap />}
        title="Semester Two Results"
        content={"GPA: 2.5"}
        numCourses={"Number of courses written: 5"}
        status={"Status: Passed"}
        bgColor="#F9E7D1"
        textColor="#E67E"
        tableData={[
    { course: "Mathematics", credit: 5, CA: "20", exam:"60" , final:"80", grade: "A" },
    { course: "Programming I", credit: 4, CA: "10", exam:"85", final:"95", grade: "A+" },
    { course: "Digital Logic", credit: 3, CA: "18",  exam:"60", final:"78", grade: "B" },
         ]}
         />

         <GradesCard
        Icon={<GraduationCap />}
        title="Semester Three Results"
        content={"GPA: 1.5"}
        numCourses={"Number of courses written: 5"}
        status={"Status: Failed                                                                                        "}
        bgColor="#DCE6CD"
        textColor="#628141"
        tableData={[
    { course: "Software Maintenance", credit: 5, CA: "20", exam:"60" , final:"80", grade: "A" },
    { course: "Database Design", credit: 4,     CA: "10", exam:"80", final:"90", grade: "A+" },
    { course: "OOP",             credit: 3,     CA: "18",  exam:"52", final:"70", grade: "B" },
         ]}
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
