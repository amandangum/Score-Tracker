import React from "react";
import {
  Sidebar as Collapse,
  LayoutDashboard,
  User,
  LogOut,
} from "lucide-react";
import { Link } from "react-router";
import { useLocation } from "react-router-dom";

function Sidebar({ routes, sidebarOpen, setSidebarOpen }) {
  const loction = useLocation();

  const getCurrentPath = (url) => {
    if (location.pathname === url) {
      return `bg-yellow-200 py-2 text-yellow-700 ${
        sidebarOpen ? "border-r-4" : "rounded-lg"
      }`;
    }
    return "";
  };

  return (
    <div
      className={`h-screen transition-all duration-300 ease-in-out pt-20 pb-8 fixed ${
        sidebarOpen ? "w-70" : "w-15"
      } shadow px-2 flex flex-col justify-between pb-5`}
    >
      <div>
        <div
          className={`flex ${
            sidebarOpen ? "flex-row" : "flex-col items-start"
          } items-center gap-2 border-b-gray-300 py-2 justify-between border-b `}
        >
          <div className="flex items-center">
            <img
              src="https://img.freepik.com/free-vector/hacker-operating-laptop-cartoon-icon-illustration-technology-icon-concept-isolated-flat-cartoon-style_138676-2387.jpg?semt=ais_hybrid&w=740&q=80"
              alt="My avatar"
              width={40}
              className="rounded-full "
            />
            {sidebarOpen && <p>John Doe</p>}
          </div>
          <button
            className={`cursor-pointer hover:bg-gray-100 transition-all duration-300 ease-in-out rounded-lg p-2`}
            onClick={() => setSidebarOpen((prev) => !prev)}
          >
            <Collapse size={18} />
          </button>
        </div>

        <div className="mt-5">
          {routes.map((route) => {
            const IconComponent = route.icon;
            return (
              <Link
                to={route.route}
                className={`flex gap-4  mb-2 px-2 items-center  hover:bg-yellow-200 py-2 hover:text-yellow-700 transition-all duration-300 ease-in-out ${
                  !sidebarOpen && "hover:rounded-lg"
                } ${getCurrentPath(route.route)}`}
              >
                <IconComponent />
                {sidebarOpen && <p>{route.name}</p>}
              </Link>
            );
          })}
        </div>
      </div>
      <button
        className="w-full cursor-pointer flex items-center justify-center bg-gray-200 rounded-lg gap-2 py-2 shadow transition-all
      duration-300 ease-in-out hover:bg-gray-400 hover:text-white"
      >
        <LogOut size={18} /> {sidebarOpen && <p>Logout</p>}
      </button>
    </div>
  );
}

export default Sidebar;
