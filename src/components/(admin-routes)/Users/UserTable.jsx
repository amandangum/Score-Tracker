import React from "react";
import { FaUserTie, FaUsers } from "react-icons/fa";

/* ---------------- DATA ---------------- */

const lecturerData = [
  {
    name: "Dr. Michael Rodriguez",
    department: "Computer Science",
    coursesAssigned: 5,
    levels: [100, 200, 300],
    numStudents: 142,
    avgScore: "87.2%",
  },
  {
    name: "Prof. Sarah Chen",
    department: "Mathematics",
    coursesAssigned: 4,
    levels: [100, 200],
    numStudents: 203,
    avgScore: "82.5%",
  },
  {
    name: "Dr. James Wilson",
    department: "Physics",
    coursesAssigned: 3,
    levels: [200, 300, 400],
    numStudents: 98,
    avgScore: "85.7%",
  },
];

const studentData = [
  { level: "100", totalStudents: 120, male: 70, female: 50 },
  { level: "200", totalStudents: 100, male: 45, female: 55 },
  { level: "300", totalStudents: 90, male: 50, female: 40 },
];

/* Level badge colors */
const levelColors = {
  100: "bg-blue-100 text-blue-600",
  200: "bg-purple-100 text-purple-600",
  300: "bg-green-100 text-green-600",
  400: "bg-orange-100 text-orange-600",
};

/* ---------------- COMPONENT ---------------- */

function UserTable({ activeTab }) {
  return (
    <div className="mt-13 w-[96%] ml-10 bg-white shadow rounded-2xl overflow-hidden">
      {/* ---------- HEADER ---------- */}
      <div className="flex items-center justify-between px-6 py-4 ">
        <div className="flex items-center gap-2 text-lg font-semibold text-gray-800">
          {activeTab === "Lecturers Overview" ? (
            <>
              <FaUserTie className="text-[#0099dc]" />
              Lecturers Information
            </>
          ) : (
            <>
              <FaUsers className="text-[#0099dc]" />
              Students Information
            </>
          )}
        </div>

        <div className="flex gap-3">
          <select className="border rounded-lg px-3 py-2 text-sm outline-none">
            <option>All Departments</option>
          </select>
          <select className="border rounded-lg px-3 py-2 text-sm outline-none">
            <option>All Levels</option>
          </select>
        </div>
      </div>

      <div className="h-px bg-gray-300 -mx-4 mt-3"></div>

      {/* ---------- TABLE ---------- */}
      <div className="overflow-x-auto mt-10">
        {activeTab === "Lecturers Overview" ? (
          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-gray-600">
              <tr>
                <th className="px-6 py-3 text-left font-medium">
                  Lecturer Name
                </th>
                <th className="px-6 py-3 text-left font-medium">Department</th>
                <th className="px-6 py-3 text-left font-medium">
                  Courses Assigned
                </th>
                <th className="px-6 py-3 text-left font-medium">Levels</th>
                <th className="px-6 py-3 text-left font-medium">Students</th>
              </tr>
            </thead>

            <tbody>
              {lecturerData.map((lecturer, index) => (
                <tr
                  key={index}
                  className="hover:bg-gray-50 border-b border-gray-300"
                >
                  <td className="px-6 py-4 font-medium text-gray-800">
                    {lecturer.name}
                  </td>
                  <td className="px-6 py-4">{lecturer.department}</td>
                  <td className="px-6 py-4">
                    {lecturer.coursesAssigned} courses
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      {lecturer.levels.map((level) => (
                        <span
                          key={level}
                          className={`px-3 py-1 rounded-full text-xs font-medium ${levelColors[level]}`}
                        >
                          {level}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4">{lecturer.numStudents} students</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-gray-600">
              <tr>
                <th className="px-6 py-3 text-left font-medium">Level</th>
                <th className="px-6 py-3 text-left font-medium">
                  Total Students
                </th>
                <th className="px-6 py-3 text-left font-medium">Male</th>
                <th className="px-6 py-3 text-left font-medium">Female</th>
              </tr>
            </thead>

            <tbody>
              {studentData.map((student, index) => (
                <tr
                  key={index}
                  className="hover:bg-gray-50 border-b border-gray-300"
                >
                  <td className="px-6 py-4">
                    <span
                      className={`w-13 h-9 flex items-center justify-center rounded-full text-xs font-semibold ${
                        levelColors[student.level]
                      }`}
                    >
                      {student.level}
                    </span>
                  </td>

                  <td className="px-6 py-4">{student.totalStudents}</td>
                  <td className="px-6 py-4">{student.male}</td>
                  <td className="px-6 py-4">{student.female}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default UserTable;
