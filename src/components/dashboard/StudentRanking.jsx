import React from "react";

function StudentRanking() {
  return (
    <div className="mt-5 w-[99%] shadow rounded-2xl p-5">
      <h1 className="text-lg font-semibold">
        Ranking of Best Student for each course
      </h1>

     

      <div className="overflow-x-auto">
        <table className="w-full mt-10">
          <thead className="bg-[#f0f7ff] border-b border-[#f0f7ff]">
            <tr>
              <th className="p-3 font-semibold text-left">Course</th>
              <th className="p-3  font-semibold text-left">Credit Value</th>
              <th className="p-3  font-semibold text-left">Best Student</th>
              <th className="p-3  font-semibold text-left">Best Grade</th>
            </tr>
          </thead>

          <tbody>
            <tr className="bg-white border-b border-gray-200">
              <td className="p-3 text-sm text-gray-700">
                Mobile App Development
              </td>
              <td className="p-3 text-sm text-gray-700">5</td>
              <td className="p-3 text-sm text-gray-700">Nabefo Ibrahim</td>
              <td className="p-3 text-sm text-gray-700">A</td>
            </tr>

            <tr className="bg-[#f0f7ff] border-b border-[#f0f7ff]">
              <td className="p-3 text-sm text-gray-700">Embedded Systems</td>
              <td className="p-3 text-sm text-gray-700">3</td>
              <td className="p-3 text-sm text-gray-700">Nabefo Ibrahim</td>
              <td className="p-3 text-sm text-gray-700">A+</td>
            </tr>

            <tr className="bg-white border-b border-gray-200">
              <td className="p-3 text-sm text-gray-700">Compiler Design</td>
              <td className="p-3 text-sm text-gray-700">7</td>
              <td className="p-3 text-sm text-gray-700">Atangana Joyce</td>
              <td className="p-3 text-sm text-gray-700">B</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StudentRanking;
