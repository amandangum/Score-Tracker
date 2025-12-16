import React from "react";
import { useState } from "react";

function GradesCard({
  title,
  Icon,
  content,
  numCourses,
  status,
  bgColor,
  textColor,
  tableData,
}) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        style={{ backgroundColor: bgColor, color: textColor }}
        className={`md:w-75 h-70 shadow-lg rounded-lg p-3 mt-5 xsm:w-[90%]`}
      >
        <div className="p-2 rounded-lg bg-white/50 w-fit">{Icon}</div>
        <h1 className="text-xl font-semibold my-3 ">{title}</h1>
        <p>{content}</p>
        <p>{numCourses}</p>
        <p>{status}</p>
        <button
          className="mt-5 bg-gray-50 rounded-full p-3 hover:cursor-pointer hover:bg-gray-200 "
          onClick={() => setOpen(!open)}
        >
          {" "}
          {!open ? "Click here to view More" : "Hide More"}
        </button>
      </div>

      {open && (
        <div className="mt-5 w-[99%] shadow rounded-2xl p-5">
          <h1 className="text-lg font-semibold">Academic Summary</h1>
          <div className="md:flex justify-between mt-3">
            <div>
              <p className="text-sm">Current GPA</p>
              <h1 className="font-bold">{content}</h1>
            </div>

            <div>
              <p className="text-sm">Total credit earned</p>
              <h1 className="font-bold">73</h1>
            </div>

            <div>
              <p className="text-sm">Academic Standing</p>
              <h1 className="font-bold">{status}</h1>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="md:w-full xsm:w-[70%] mt-10">
              <thead className="bg-[#f0f7ff] border-b border-[#f0f7ff]">
                <tr>
                  <th className="p-3 font-semibold text-left">Course</th>
                  <th className="p-3  font-semibold text-left">Credit Value</th>
                  <th className="p-3  font-semibold text-left">CA Mark</th>
                  <th className="p-3  font-semibold text-left">Exam Mark</th>
                  <th className="p-3  font-semibold text-left">Final Mark</th>
                  <th className="p-3  font-semibold text-left"> Grade</th>
                </tr>
              </thead>

              <tbody>
                {tableData.map((row, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-white" : "bg-[#f0f7ff]"}
                  >
                    <td className="p-3 text-sm text-gray-700">{row.course}</td>
                    <td className="p-3 text-sm text-gray-700">{row.credit}</td>
                    <td className="p-3 text-sm text-gray-700">{row.CA}</td>
                    <td className="p-3 text-sm text-gray-700">{row.exam}</td>
                    <td className="p-3 text-sm text-gray-700">{row.final}</td>
                    <td className="p-3 text-sm text-gray-700">{row.grade}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
}

export default GradesCard;
