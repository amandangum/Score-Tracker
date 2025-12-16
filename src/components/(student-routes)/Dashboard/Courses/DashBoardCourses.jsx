import React, {useState}from 'react'
import CourseTable from './CourseTable'
import CourseModal from './CourseModal';
import CourseStats from './CourseStats';

function DashBoardCourses() {
    const [courses, setCourses] = useState([
        {
           code: "CS101",  
           name: "Introduction to Graphics Design",
           instructor: "Dr NelSon",
           description: "This course teaches the basics of programming using C++ and problem-solving skills."
        },
        {
           code: "CS102",  
           name: "Modern Letters",
           instructor: "Dr Mari",
           
        },
        {
           code: "CS103",  
           name: "Numerical Methods",
           instructor: "Mme Lwangla",
        
        },
       ]);

       const stats={
        total: 3,
        completed: 1,
        ongoing: 1,
        notStarted: 1,
       };
       
       const[selectedCourse, setSelectedCourse] = useState(null);
       const[isModalOpen, setIsModalOpen] = useState(false);

       const handleViewCourse = (course) => {
        setSelectedCourse(course);
        setIsModalOpen(true)
       };
  return (
    <div>
        <CourseTable courses={courses} onView={handleViewCourse} />

         <CourseModal
         isOpen={isModalOpen}
         onClose={() => setIsModalOpen(false)}
         course={selectedCourse}
         />
         
    </div>
  )
}

export default DashBoardCourses