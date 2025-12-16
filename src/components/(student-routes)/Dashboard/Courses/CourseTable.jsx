import React from "react";

function CourseTable({ courses, onView }) {
  return (

    <div className="md:w-[98%]  shadow-lg rounded-lg p-3 mt-15 xsm:w-[90%]">
      <div className=" overflow-x-auto">
      <div className="md:flex gap-4">
         <p className="mt-5 text-2xl font-medium">Enrolled Courses For the Semester</p>
          <select 
        name="" 
        id=""
        type="text" 
        defaultValue='Select Semester'
        className='text-gray-500 border mt-3 py-3 md:w-[20%] px-3 rounded-2xl focus:outline-none xsm:w-[65%]'

        >
        <option value="">Select Semester</option>
        <option value="">First Semester</option>
        <option value="">Second Semester</option>
       </select>
      </div>
       

      <table className="md:w-[99%] xsm:w-[70%] border border-gray-300 rounded-lg mt-5">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 text-left border-b border-gray-300">Course Code</th>
            <th className="p-3 text-left border-b border-gray-300">Course Name</th>
            <th className="p-3 text-left border-b border-gray-300">Instructor</th>
            <th className="p-3 text-left border-b border-gray-300">Actions</th>
          </tr>
        </thead>

        <tbody>
          {courses.length === 0 ? (
            <tr>
              <td>No Courses Enrolled yet</td>
            </tr>
          ) : (
            courses.map((course, index) => (
              <tr key={index}>
                <td className="p-3 border-b border-gray-300">{course.code}</td>
                <td className="p-3 border-b border-gray-300">{course.name}</td>
                <td className="p-3 border-b border-gray-300">{course.instructor}</td>
                <td className="p-3 border-b border-gray-300">
                  <button
                    onClick={() => onView(course)}
                    className="px-3 py-1 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
                  >
                    {" "}
                    View
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>

    </div>

    
  );
}

export default CourseTable;
