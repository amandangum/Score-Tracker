import React from 'react'

function LecturerCard({title, content, textColor, bgColor, Icon}) {
  return (
    <div
      style={{ backgroundColor: bgColor, color: textColor }}
      className="md:w-70 min-h-32 shadow-lg rounded-2xl p-4 mt-8 xsm:w-[80%] md:flex items-center"
    >
      <div className="flex items-center gap-4">
        
        <div className="p-3 rounded-lg bg-white/50 w-fit">
          {Icon}
        </div>

        <div>
          <h1 className="text-3xl font-semibold mb-1">{content}</h1>
          <p className="text-sm ">{title}</p>
        </div>

      </div>
    </div>
  )
}

export default LecturerCard