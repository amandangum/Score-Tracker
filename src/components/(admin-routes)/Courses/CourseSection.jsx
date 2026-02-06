import React from "react";
import Header from "../Complaints/Header";
import { MdOutlineFormatListNumbered } from "react-icons/md";
import { FiLayers } from "react-icons/fi";
import SideSectionCard from "./SideSectionCard";
import TotalNumCards from "./TotalNumCards";
import CourseCards from "./CourseCards";
import Footer from "./Footer";
import { useState } from "react";
import { CoursesData } from "./CourseCards";

function CourseSection() {
  const [selectedLevel, setSelectedLevel] = useState("All Levels");
  const [selectedSemester, setSelectedSemester] = useState("All Semesters");

  const filteredCourses = CoursesData.filter((course) => {
  const levelMatch =
    selectedLevel === "All Levels" || course.level === selectedLevel;

  const semesterMatch =
    selectedSemester === "All Semesters" ||
    course.semester === selectedSemester;

  return levelMatch && semesterMatch;
});
  return (
    <div>
      <Header />

      <div className="md:flex gap-4 ml-4 pb-16 items-start">
        <div className="md:w-[30%] rounded-lg shadow p-4 bg-[#f7f9fa] mt-10">
          <div className="flex items-center justify-center gap-2 text-gray-700">
            <FiLayers size={22} />
            <h1 className="font-bold">Filter By Level</h1>
          </div>
          <div className="flex flex-col items-center">
            <SideSectionCard
              levels={"All Levels"}
              text={"18"}
              onClick={() => setSelectedLevel("All Levels")}
              active={selectedLevel === "All Levels"}
            />
            <SideSectionCard
              levels={"Level 1"}
              text={"6"}
              onClick={() => setSelectedLevel("Level 1")}
              active={selectedLevel === "Level 1"}
            />
            <SideSectionCard
              levels={"Level 2"}
              text={"4"}
              onClick={() => setSelectedLevel("Level 2")}
              active={selectedLevel === "Level 2"}
            />
            <SideSectionCard
              levels={"Level 3"}
              text={"5"}
              onClick={() => setSelectedLevel("Level 3")}
              active={selectedLevel === "Level 3"}
            />
          </div>

          <div className="mt-10">
            <div className="flex items-center justify-center gap-2 text-gray-700">
              <FiLayers size={22} />
              <h1 className="font-bold">Filter By Semester</h1>
            </div>
            <div className="flex flex-col items-center">
              <SideSectionCard
                levels="All Semesters"
                text="18"
                onClick={() => setSelectedSemester("All Semesters")}
                active={selectedSemester === "All Semesters"}
              />

              <SideSectionCard
                levels="Semester 1"
                text="6"
                onClick={() => setSelectedSemester("Semester 1")}
                active={selectedSemester === "Semester 1"}
              />

              <SideSectionCard
                levels="Semester 2"
                text="4"
                onClick={() => setSelectedSemester("Semester 2")}
                active={selectedSemester === "Semester 2"}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 mt-10">
            <TotalNumCards
              title={"12"}
              content={"Total Courses"}
              bgColor={"#ff007b"}
              textColor={"#fff"}
            />
            <TotalNumCards
              title={"All"}
              content={"current Levels"}
              bgColor="#3d33c4"
              textColor={"#fff"}
            />
            <TotalNumCards
              title={"All"}
              content={"current Semester"}
              bgColor={"#00cbf1"}
              textColor={"#fff"}
            />
            <TotalNumCards
              title={"40"}
              content={"Total Credits"}
              bgColor={"#7d00b5"}
              textColor={"#fff"}
            />
          </div>
        </div>
                 
                 {/* Bigger Container*/}
        <div className="md:w-[68%] rounded-lg shadow p-4 bg-[#f7f9fa] mt-10">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">All Courses</h1>
            <p className="w-30 rounded-2xl bg-[#2d63ed] text-white p-2 text-center">
              12 Courses
            </p>
          </div>
          <div className="h-px bg-gray-300 -mx-4 mt-3"></div>

          <div>
            <CourseCards courses={filteredCourses}/>

            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseSection;
