import React, { useState } from "react";
import UsersCard from "./UsersCard";
import { FaChalkboardTeacher, FaUserGraduate } from "react-icons/fa";
import { FaBook } from "react-icons/fa6";
import UserTable from "./UserTable";

function UsersSection() {
  const [activeTab, setActiveTab] = useState("Lecturers Overview");

  function Tab({ label, position }) {
    const isActive = activeTab === label;

    // Determine border radius based on position and active state
    let borderRadius = "";
    if (isActive && position === "left") borderRadius = "rounded-l-2xl";
    if (isActive && position === "right") borderRadius = "rounded-r-2xl";

    return (
      <div
        onClick={() => setActiveTab(label)}
        className={`flex-1 text-center py-4 cursor-pointer font-medium transition-colors duration-300
          ${
            isActive
              ? `bg-[#0099dc] text-white ${borderRadius}`
              : "text-gray-500 hover:bg-gray-100"
          }`}
      >
        {label}
      </div>
    );
  }

  return (
    <>
      <div className="md:flex gap-5 ml-10">
        <UsersCard
          title={"Total Lecturers"}
          content={"20"}
          Icon={<FaChalkboardTeacher size={32} />}
          bgColor={"#33AEE4"}
          textColor={"#00466A"}
        />
        <UsersCard
          title={"Total Students"}
          content={"93"}
          Icon={<FaUserGraduate size={32} />}
          bgColor={"#33D98F"}
          textColor={"#005E39"}
        />
        <UsersCard
          title={"Total Courses"}
          content={"68"}
          Icon={<FaBook size={32} />}
          bgColor={"#B774C2"}
          textColor={"#4C2755"}
        />
      </div>

      <div>
        <div className="flex bg-white shadow mt-15 md:w-[96%] rounded-2xl ml-10">
          <Tab label="Lecturers Overview" position="left" />
          <Tab label="Students Overview" position="right" />
        </div>
         
         <div className="pb-10">
          <UserTable activeTab={activeTab} />
         </div>
        
      </div>
    </>
  );
}

export default UsersSection;
