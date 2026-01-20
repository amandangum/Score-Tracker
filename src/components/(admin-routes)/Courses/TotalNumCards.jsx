import React from 'react'

function TotalNumCards({ title, Icon, content, bgColor, textColor }) {
  return (
    <div
      style={{ backgroundColor: bgColor, color: textColor }}
      className="md:w-40 min-h-32 shadow-lg flex items-center justify-center gap-2 rounded-2xl p-4 xsm:w-[80%]"
    >
      <div className="flex items-center gap-4">
        <div>
          <h1 className="text-4xl font-semibold mb-1">{title}</h1>
          <p className="text-sm font-medium text-center ">{content}</p>
        </div>

      </div>
      </div>
  )
}

export default TotalNumCards