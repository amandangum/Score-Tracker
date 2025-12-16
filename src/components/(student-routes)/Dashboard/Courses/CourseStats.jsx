import React from "react";

const announcements = [
  {
    id: 1,
    title: "New Lesson Uploaded",
    details: "Module 3: Introduction to Algorithms is now available.",
    date: "Dec 10, 2025",
    tag: "Course"
  },
  {
    id: 2,
    title: "Assignment Deadline",
    details: "Submit your Week 2 assignment before Friday.",
    date: "Dec 12, 2025",
    tag: "Deadline"
  },
  {
    id: 3,
    title: "CA Exams",
    details: "You'll have a CA for Compiler Design this Saturday from 2–4 PM.",
    date: "Dec 14, 2025",
    tag: "Exams"
  }
];

function CourseStats() {
  return (
    <div className=" md:w-[98%]  shadow-lg rounded-lg p-3 mt-15 xsm:w-[90%]">
      <h2 className="text-2xl font-semibold mb-3">Announcements</h2>

      <ul className="space-y-3 mt-7">
        {announcements.map((item) => (
          <li key={item.id} className="border-b border-b-gray-200 pb-3">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">{item.title}</h3>
              <span className="text-xs text-gray-500">{item.date}</span>
            </div>
            <p className="text-sm text-gray-700 mt-1">{item.details}</p>
            <span className="inline-block mt-2 text-xs px-2 py-1 rounded bg-gray-200">
              {item.tag}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CourseStats;
