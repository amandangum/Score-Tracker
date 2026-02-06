import React from "react";
import LecturerCard from "../../(teacher-routes)/Dashboard/LecturerCard";
import {
  FaUser,
  FaChalkboardTeacher,
  FaExclamationTriangle,
  FaUserGraduate,
} from "react-icons/fa";
import RecentAct from "./RecentAct";

function Dashboard() {
  return (
    <div>
      <div className="md:flex items-center gap-4">
        <LecturerCard
          Icon={<FaUser />}
          title="Total Users "
          content={40}
          bgColor="#f5f7fa"
          textColor="#5F6673"
        />
        <LecturerCard
          Icon={<FaChalkboardTeacher />}
          title="Total Lecturers "
          content={15}
          bgColor="#FFE08F"
          textColor="#6B521B"
        />
        <LecturerCard
          Icon={<FaUserGraduate />}
          title="Total Students "
          content={25}
          bgColor="#E1E0EA"
          textColor="#46454C"
        />
        <LecturerCard
          Icon={<FaExclamationTriangle />}
          title="Total Complaints "
          content={8}
          bgColor="#AED3E0"
          textColor="#1A333C"
        />
      </div>
      <RecentAct />
      </div>
  
  );
}

export default Dashboard;
