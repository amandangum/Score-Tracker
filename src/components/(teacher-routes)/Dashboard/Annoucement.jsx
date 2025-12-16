import React from 'react'

function Annoucement({title, venue, time}) {
  return (
    

          <div className='mt-7 w-[90%] shadow rounded-xl p-5 bg-[#f8f9fa] border-l-4 border-l-[#3498db]'>
            <div className='md:flex justify-between'>
                <div>
            <h1 className='font-bold text-xl'>{title}</h1>
            <p>{venue}</p> 
                </div>
                <div className='md:flex justify-center items-center'>
                   {time}
                </div>
            </div>
    </div>
  )
}

export default Annoucement