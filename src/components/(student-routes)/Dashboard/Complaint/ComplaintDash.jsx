import React from "react";
import ComplaintCards from "./ComplaintCards";

export default function ComplaintsSection() {
  return (
    <div className="p-6 space-y-6 w-full">
      <div className="md:flex gap-5">
        <ComplaintCards
          title={"Total Complaints"}
          content={0}
          bgColor="#e6deb5"
          textColor="#6F6B45"
        />
        <ComplaintCards
          title={"Resolved"}
          content={0}
          bgColor="#8dd6d9"
          textColor="#004D66"
        />

        <ComplaintCards
          title={"Pending"}
          content={0}
          bgColor="#f2d5b3"
          textColor="#7A553E"
        />
        <ComplaintCards
          title={"Overdue"}
          content={0}
          bgColor="#ffdee3"
          textColor="#7A5457"
        />
      </div>

      <div className="rounded-2xl shadow-md p-10 bg-white mt-10">
        <h2 className="text-xl font-semibold mb-4">Submit a Complaint</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-9">
          <input
            type="text"
            placeholder="Full Name"
            className="border-none bg-gray-100 p-3 rounded-lg w-full"
          />
          <input
            type="text"
            placeholder="Email"
            className="border-none bg-gray-100 p-3 rounded-lg w-full"
          />
          <input
            type="text"
            placeholder="Course"
            className="border-none bg-gray-100 p-3 rounded-lg w-full"
          />
          <input
            type="text"
            placeholder="Level"
            className="border-none bg-gray-100 p-3 rounded-lg w-full"
          />
        </div>
        <textarea
          placeholder="Describe your complaint..."
          className="border-none bg-gray-100 p-10 rounded-lg w-full mt-10"
        />
        <button className="mt-4 w-full md:w-auto bg-yellow-600 text-white p-3 rounded-lg hover:bg-yellow-700 cursor-pointer transition-all duration-300 ease-in-out">
          Submit Complaint
        </button>
      </div>

      <div className="rounded-2xl shadow-md p-10 bg-white">
        <h2 className="text-xl font-semibold mb-4">Your Complaints</h2>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-4">
          <input
            type="text"
            placeholder="Search for complaint.."
            className="border p-2 rounded-lg md:w-1/3"
          />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="p-3 *:border-b border-gray-300">Complaint ID</th>
                <th className="p-3 border-b border-gray-300">Course</th>
                <th className="p-3 border-b border-gray-300">Status</th>
                <th className="p-3 border-b border-gray-300">Priority</th>
                <th className="p-3 border-b border-gray-300">Submitted On</th>
                <th className="p-3 border-b border-gray-300">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-3 border-b border-gray-300">#2025-001</td>
                <td className="p-3 border-b border-gray-300">Numerical Methods</td>
                <td className="p-3 border-b border-gray-300">Pending</td>
                <td className="p-3 border-b border-gray-300">High</td>
                <td className="p-3 border-b border-gray-300">Dec 11, 2025</td>
                <td className="p-3 border-b border-gray-300">
                  <button className="bg-green-500 text-white p-2 rounded-lg text-  hover:bg-green-600 cursor-pointer transition-all duration-300 ease-in-out">
                    View
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
