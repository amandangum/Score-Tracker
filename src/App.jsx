import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/home/Homepage";
import Login from "./components/Login/Login";
import Signup from "./components/signup/signup";

function App(){
   return(
    <BrowserRouter>
    <Routes>

      <Route path="/" element={<Homepage />} />
      <Route path="/Login" element={<Login/>} />
      <Route path="/signup" element={<Signup />} />

    </Routes>
    
    </BrowserRouter>
   )
}

export default App;