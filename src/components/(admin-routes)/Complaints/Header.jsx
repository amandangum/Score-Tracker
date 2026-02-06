import React from 'react'

function Header() {
  return (
    <div className="flex justify-center">
      <div className="w-[95%] md:w-[98%] rounded-lg shadow p-12 bg-[#f7f9fa]">
        <h1 className="text-center text-3xl md:text-5xl font-bold">
          Academic Courses
        </h1>

        <p className="mt-4 text-center max-w-2xl mx-auto text-gray-700">
          Browse and filter courses by academic level and semester. 
          Select a level and semester to view available courses.
        </p>
      </div>
    </div>
  )
}

export default Header
