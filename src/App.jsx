import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/home/Homepage";
import Login from "./components/(auth-routes)/Login/Login";
import Signup from "./components/(auth-routes)/signup/signup";
import StudentDash from "./components/(student-routes)/Dashboard/StudentDash";
import StudentGrade from "./components/(student-routes)/Dashboard/Grades/StudentGrade";
import ForgotPassword from "./components/(auth-routes)/ForgotPassword/ForgotPassword";
import { useState } from "react";
import TeacherDash from "./components/(teacher-routes)/Teacher";
import AdminDash from "./components/(admin-routes)/AdminDash";

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
                                       
      <Route path="/lecturer-dashboard" element={<TeacherDash
                                       sidebarOpen={sidebarOpen} 
                                       setSidebarOpen={setSidebarOpen} />}/>

      <Route path="/admin-dashboard" element={<AdminDash
                                       sidebarOpen={sidebarOpen} 
                                       setSidebarOpen={setSidebarOpen} />}/>

      <Route path="/student-grades" element={<StudentGrade 
                                       sidebarOpen={sidebarOpen} 
                                       setSidebarOpen={setSidebarOpen} />}/>
    </Routes>
    
    </BrowserRouter>
   )
}

export default App;