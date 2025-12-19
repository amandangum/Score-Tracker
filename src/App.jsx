import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/home/Homepage";
import Login from "./components/(auth-routes)/Login/Login";
import Signup from "./components/(auth-routes)/signup/signup";
import StudentDash from "./components/(student-routes)/Dashboard/StudentDash";
import StudentGrade from "./components/(student-routes)/Dashboard/Grades/StudentGrade";
import StudentCourses from "./components/(student-routes)/Dashboard/Courses/studentCourses";
import Complaint from "./components/(student-routes)/Dashboard/Complaint/StudentComplaint";
import ForgotPassword from "./components/(auth-routes)/ForgotPassword/ForgotPassword";
import { useState } from "react";
import TeacherDash from "./components/(teacher-routes)/Teacher";
import AdminDash from "./components/(admin-routes)/AdminDash";
import LectCourses from "./components/(teacher-routes)/Courses/LectCourses";
import StudentSec from "./components/(teacher-routes)/Students/StudentSec";
import ScoreEntry from "./components/(teacher-routes)/Score/ScoreEntry";

function App(){
   const [sidebarOpen, setSidebarOpen] = useState(true);

   return(
    <BrowserRouter>
    <Routes>

      <Route path="/" element={<Homepage />} />
      <Route path="/Login" element={<Login/>} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/studentdash" element={<StudentDash />} />
      <Route path="/forgot-password" element={<ForgotPassword/>}/>
      <Route path="/student-dashboard" element={<StudentDash 
                                       sidebarOpen={sidebarOpen} 
                                       setSidebarOpen={setSidebarOpen} />}/>
       <Route path="/student-grades" element={<StudentGrade 
                                       sidebarOpen={sidebarOpen} 
                                       setSidebarOpen={setSidebarOpen} />}/>
      <Route path="/student-courses" element={<StudentCourses 
                                       sidebarOpen={sidebarOpen} 
                                       setSidebarOpen={setSidebarOpen} />}/>
      <Route path="/student-complaints" element={<Complaint
                                       sidebarOpen={sidebarOpen} 
                                       setSidebarOpen={setSidebarOpen} />}/>   
                                                                    
      <Route path="/lecturer-dashboard" element={<TeacherDash
                                       sidebarOpen={sidebarOpen} 
                                       setSidebarOpen={setSidebarOpen} />}/>

      <Route path="/lecturer-courses" element={<LectCourses
                                       sidebarOpen={sidebarOpen} 
                                       setSidebarOpen={setSidebarOpen} />}/>
      <Route path="/lecturer-students" element={<StudentSec
                                       sidebarOpen={sidebarOpen} 
                                       setSidebarOpen={setSidebarOpen} />}/>
      <Route path="/lecturer-score" element={<ScoreEntry
                                       sidebarOpen={sidebarOpen} 
                                       setSidebarOpen={setSidebarOpen} />}/>
      <Route path="/admin-dashboard" element={<AdminDash
                                       sidebarOpen={sidebarOpen} 
                                       setSidebarOpen={setSidebarOpen} />}/>

      
    </Routes>
    
    </BrowserRouter>
   )
}

export default App;