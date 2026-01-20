import React from "react";
import { useState } from "react";
import SideSectionCard from "./SideSectionCard";

export const CoursesData = [
  {
    id: 1,
    level: "Level 1",
    semester: "Semester 1",
    courseId: "CSC101",
    courseName: "Introduction to Computer Science",
    description:
      "It is all about the Basics of computer systems, programming concepts amd problem solving.",
    instructor: "Dr. John Mbah",
    credit: 3,
    duration: "12 weeks",
  },

  {
    id: 2,
    level: "Level 3",
    semester: "Semester 2",
    courseId: "CSC101",
    courseName: "Introduction to Computer Science",
    description:
      "It is all about the Basics of computer systems, programming concepts amd problem solving.",
    instructor: "Dr. John Mbah",
    credit: 3,
    duration: "12 weeks",
  },

  {
    id: 3,
    level: "Level 2",
    semester: "Semester 2",
    courseId: "CSC101",
    courseName: "Introduction to Computer Science",
    description:
      "It is all about the Basics of computer systems, programming concepts amd problem solving.",
    instructor: "Dr. John Mbah",
    credit: 3,
    duration: "12 weeks",
  },

  {
    id: 4,
    level: "Level 3",
    semester: "Semester 1",
    courseId: "CSC101",
    courseName: "Introduction to Computer Science",
    description:
      "It is all about the Basics of computer systems, programming concepts amd problem solving.",
    instructor: "Dr. John Mbah",
    credit: 3,
    duration: "12 weeks",
  },

  {
    id: 5,
    level: "Level 2",
    semester: "Semester 1",
    courseId: "CSC101",
    courseName: "Introduction to Computer Science",
    description:
      "It is all about the Basics of computer systems, programming concepts amd problem solving.",
    instructor: "Dr. John Mbah",
    credit: 3,
    duration: "12 weeks",
  },
  {
    id: 1,
    level: "Level 1",
    semester: "Semester 2",
    courseId: "CSC101",
    courseName: "Introduction to Computer Science",
    description:
      "It is all about the Basics of computer systems, programming concepts amd problem solving.",
    instructor: "Dr. John Mbah",
    credit: 3,
    duration: "12 weeks",
  },
];

const levelColors = {
    "Level 1": "bg-[#2d62ed]",
    "Level 2": "bg-[#00ccf2]",
    "Level 3": "bg-[#7d00b5]",
};

const semesterColors ={
    "Semester 1" : "bg-[#ff007c]",
    "Semester 2" : "bg-[#ff9900]",
}

function CourseCards({ course}) {
  const {
    level,
    semester,
    courseId,
    courseName,
    description,
    instructor,
    credit,
    duration,
  } = course;

  return (
    <div className="bg-gray-50 rounded-2xl p-4 shadow-md w-full max-w-md border border-transparent hover:border-[#2d62ed] transition-all duration-300 ease-in-out">
      <div className="flex justify-between items-center mb-3">
        <span className={`p-2 rounded-2xl ${levelColors[level]} text-white text-xs font-medium`}>
          {level}
        </span>
        <span className={`p-2 rounded-2xl bg-[#a2d4e1] text-white text-xs font-medium ${semesterColors[semester]}`}>
          {semester}
        </span>
      </div>

      {/*Inner Card*/}
      <div className="bg-white p-6">
        <p className="text-xs text-[#2d62ed] font-semibold">{courseId}</p>
        <h3 className="text-lg font-bold text-gray-800">{courseName}</h3>
        <p className="texxt-sm text-gray-600">{description}</p>
       

        <div className="flex justify-between text-sm mt-8">
          <span className="font-medium text-gray-600">Instructor</span>
          <span className="text-gray-800">{instructor}</span>
        </div>

        <div className='h-px bg-gray-300 -mx-4 mt-3'></div>

        <div className="flex justify-between text-sm">
          <span className="font-medium text-gray-600">Credit</span>
          <span className="text-gray-800">{credit}</span>
        </div>
        <div className='h-px bg-gray-300 -mx-4 mt-3'></div>

        <div className="flex justify-between text-sm">
          <span className="font-medium text-gray-600">Duration</span>
          <span className="text-gray-800">{duration}</span>
        </div>
      </div>

      <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition hover:cursor-pointer">
        View Details
      </button>
    </div>
  );
}

export default function CourseCard({courses}){
  const [selectedLevel, setSelectedLevel] = useState("All Levels");
  const [selectedSemester, setSelectedSemester] = useState("All Semesters");

  const filteredCourses = CoursesData.filter((course) =>{
    const levelMatch = selectedLevel === "All Levels" || course.level === selectedLevel;
    const semesterMatch = selectedSemester === "All Semesters" || course.semester === selectedSemester;

    return levelMatch && semesterMatch;
  })
    return(
        <section className="min-h-screen px-4 py-10 flex justify-center">
            <div className="grid md:grid-cols-3 gap-4 items-start">
                {courses.map((course) => (
                    <CourseCards key={course.id} course = {course} />
                ))}
            </div>

        </section>
    )
}
