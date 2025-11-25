import React from 'react'

function Announcement() {
  return (
    <div className='w-[99%] mt-10 shadow rounded-lg p-5'>
         <h1 className='text-lg font-semibold'>Announcements</h1>
          
          <h4 className='mt-5 '>Final Date for correction Submittion</h4>
          <p style={{backgroundColor: "#66BBBB", color:"#055555"}} className='rounded-full p-3 w-[15%] text-center mt-4'>May 14th 2025</p>
          <p className='w-180 mt-5 text-gray-500'>All corrections as regards to the final semester results must be submitted on or before the 14th of May after which
             no additional corrections will be considered</p>   
        </div>
  )
}

export default Announcement