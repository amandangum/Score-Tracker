import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/home/Homepage";
import Login from "./components/Login/Login";

function App(){
   return(
    <BrowserRouter>
    <Routes>

      <Route path="/" element={<Homepage />} />
      <Route path="/Login" element={<Login/>} />
    </Routes>
    
    </BrowserRouter>
   )
}

export default App;