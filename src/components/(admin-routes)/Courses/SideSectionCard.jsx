import React from "react";

function SideSectionCard({ levels, text, onClick, active }) {
  return (
    <div
      onClick={onClick}
      className={`
        w-[90%] mt-3 p-3 rounded-2xl shadow cursor-pointer
        transition-all duration-300 ease-in-out
        ${
          active
            ? "bg-blue-700 text-white"
            : "bg-white text-gray-800 hover:bg-gray-100"
        }
      `}
    >
      <div className="flex justify-between items-center w-full">
        <h3 className="text-sm font-semibold">{levels}</h3>

        <div
          className={`
            w-10 h-10 rounded-full shadow flex items-center justify-center
            ${active ? "bg-white text-blue-700" : "bg-gray-100 text-gray-800"}
          `}
        >
          <p className="text-sm font-medium">{text}</p>
        </div>
      </div>
    </div>
  );
}

export default SideSectionCard;
