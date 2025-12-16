import React from 'react'

function CourseCards({ title, Icon, content, bgColor, textColor }) {
  return (
    <div
      style={{ backgroundColor: bgColor, color: textColor }}
      className="md:w-70 min-h-32 shadow-lg rounded-2xl p-4 mt-8 xsm:w-[80%]"
    >
      <div className="flex items-center gap-4">
        
        <div className="p-2 rounded-lg bg-white/50 w-fit">
          {Icon}
        </div>

        <div>
          <h1 className="text-xl font-semibold mb-1">{title}</h1>
          <p className="text-3xl font-bold">{content}</p>
        </div>

      </div>
    </div>
  )
}

export default CourseCards
