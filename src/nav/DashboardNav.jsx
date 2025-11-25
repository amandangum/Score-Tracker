import { Search, Bell, LogOut } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

function DashboardNav() {
  return (
    <div className="flex items-center justify-between shadow h-[13vh] pr-2 fixed top-0 w-full backdrop-blur-lg z-50">
      <div className="flex items-center gap-5">
        <div className="flex items-center justify-center gap-2 ">
          <img
            src="https://student.eschosys.com/images/logo.jpg"
            alt="Logo"
            width={60}
            className="bg-blue-50"
          />
          <p className="text-md font-bold logo xsm:hidden md:flex">
            {" "}
            ESCHOSYS BHIFMET
          </p>
        </div>

        <div className="flex items-center gap-2 bg-gray-200 rounded-2xl py-2 px-3">
          <Search size={18} color="gray" />
          <input
           type="text"
           className="border-none focus:outline-none w-80 text-gray-500"
           placeholder="Search for a course"
           />
        </div>
       
      </div>
      <div className="flex items-center gap-2">
        <button className="cursor-pointer rounded-lg p-2 hover:bg-gray-200 transition-all duration-300 ease-in-out shadow">
            <Bell size={18} color="gray" />
        </button>
        <Link 
        to="/"
        className="cursor-pointer rounded-lg p-2 hover:bg-gray-200 transition-all duration-300 ease-in-out shadow"
        >
          <LogOut size={18} color="gray" />
        </Link>

       <div className="flex items-center">
          <img
            src="https://img.freepik.com/free-vector/hacker-operating-laptop-cartoon-icon-illustration-technology-icon-concept-isolated-flat-cartoon-style_138676-2387.jpg?semt=ais_hybrid&w=740&q=80"
            alt="My avatar"
            width={40}
            className="rounded-full shadow cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}

export default DashboardNav;
