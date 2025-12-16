import React from "react";

function CourseModal({ isOpen, onClose, course }) {
  if (!isOpen || !course) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
      <div className="bg-white w-full max-w-md rounded-lg shadow-lg p-6 animate-fadeIn xsm:w-80">
        <h2 className="text-xl font-semibold mb-4">
          {course.name}({course.code})
        </h2>

        <div className="space-y-z">
          <p>
            <span className="font-bold">Instructor:</span>
            {course.instructor}
          </p>

          <p>
            <span className="font-bold">Description:</span>
            {course.description || "No description available for thi course."}
          </p>
        </div>

        <button
          onClick={onClose}
          className="mt-6 w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default CourseModal;
