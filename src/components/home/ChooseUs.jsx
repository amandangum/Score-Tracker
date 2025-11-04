import track1 from './track1.jpeg'

function ChooseUs() {
  return (
    <div className="container mx-auto px-4 py-16 text-center justify-center">
        <h2 className='text-3xl font-bold mb-8'>Why Score Tracker</h2>

        <div className='flex flex-col md:flex-row gap-13'> 
          <img 
          src={track1} 
          alt=""
          className='ml-[-290px] h-96'
           />

           <div className="grid grid-cols-1 md:grid-cols-2 gap-19">

            <div className="p-6 bg-white w-64 rounded-lg shadow hover:shadow-lg transition-shadow ">
                <h4 className='text-xl font-bold mb-2'>Saves time</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>

                  <div className="p-6 bg-gray-900 w-64 rounded-lg shadow hover:shadow-lg transition-shadow text-white">
                <h4 className='text-xl font-bold mb-2'>Reduces Errors</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>

            <div className="p-6 bg-gray-900 w-64 rounded-lg shadow hover:shadow-lg transition-shadow text-white">
                <h4 className='text-xl font-bold mb-2'>Improves Accessibility and Security</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>

             <div className="p-6 bg-white w-64 rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className='text-xl font-bold mb-2'>Simplifies Analysis</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
           </div>
           </div>
    </div>
  )
}

export default ChooseUs