import React, { useState } from "react";
import { FaClipboardCheck, FaSave, FaPaperPlane, FaPenAlt, FaCalculator } from "react-icons/fa";

const studentsData = [
  { id: 1, name: "John Doe", matricule: "CSC/22/014" },
  { id: 2, name: "Mary Smith", matricule: "CSC/22/021" },
  { id: 3, name: "Kevin Brown", matricule: "CSC/22/030" },
];

const ScoreEntryTable = () => {
  const [scores, setScores] = useState(
    studentsData.map((s) => ({
      ...s,
      ca: "",
      exam: "",
    }))
  );

  const handleChange = (id, field, value) => {
    if (value < 0 || value > 70) return;

    setScores((prev) =>
      prev.map((s) =>
        s.id === id ? { ...s, [field]: value } : s
      )
    );
  };

  const calculateTotal = (ca, exam) =>
    (Number(ca) || 0) + (Number(exam) || 0);

  const calculateGrade = (total) => {
    if (total >= 80) return "A";
    if (total >= 70) return "B";
    if (total >= 60) return "C";
    if (total >= 50) return "D";
    return "F";
  };

  return (
    <div className="space-y-6">
      {/* Header */}
         <div>
          <h2 className="text-2xl font-bold text-gray-800">Score Entry</h2>
          <p className="text-gray-500 text-sm">
            Enter and submit students’ marks for the selected course
          </p>
        </div>
     

      {/* Controls */}
      <div className="bg-white p-4 rounded-xl shadow border border-gray-100 flex flex-wrap gap-8 w-[98%]">
        <select className="border border-gray-300 text-gray-600 px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none">
          <option>Select Course</option>
          <option>Web Development</option>
          <option>Data Structures</option>
        </select>

        <select className="border border-gray-300 px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-600">
          <option>Semester</option>
          <option>Semester 1</option>
          <option>Semester 2</option>
        </select>

        <select className="border border-gray-300 px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-600">
          <option>Assessment</option>
          <option>CA</option>
          <option>Exam</option>
        </select>

        <select className="border border-gray-300 px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-600">
          <option>Select Level</option>
          <option>Level 1</option>
          <option>Level 2</option>
          <option>Level 3</option>
        </select>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow border border-gray-100 overflow-x-auto w-[98%]">
        <table className="min-w-[98%] divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Student
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Matricule
              </th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">
                CA (30)
              </th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">
                Exam (70)
              </th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">
                Total
              </th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">
                Grade
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {scores.map((student) => {
              const total = calculateTotal(student.ca, student.exam);
              const grade = calculateGrade(total);

              return (
                <tr key={student.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-800">
                    {student.name}
                  </td>
                  <td className="px-6 py-4 text-gray-600">
                    {student.matricule}
                  </td>
                  <td className="px-6 py-4 text-center">
                    <input
                      type="number"
                      value={student.ca}
                      onChange={(e) =>
                        handleChange(student.id, "ca", e.target.value)
                      }
                      className="w-20 border border-gray-300 rounded-md text-center focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <input
                      type="number"
                      value={student.exam}
                      onChange={(e) =>
                        handleChange(student.id, "exam", e.target.value)
                      }
                      className="w-20 border border-gray-300 rounded-md text-center focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                  </td>
                  <td className="px-6 py-4 text-center font-semibold">
                    {total}
                  </td>
                  <td className="px-6 py-4 text-center font-bold text-blue-600">
                    {grade}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Footer Actions */}
      <div className="md:flex justify-between items-center">
        <p className="text-sm text-gray-500">
          Auto-saved • Last update just now
        </p>
        <div className="flex gap-3 xsm:mt-3">
          <button className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50">
            <FaSave />
            Save Draft
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 mr-8">
            <FaPaperPlane />
            Submit Scores
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScoreEntryTable;
