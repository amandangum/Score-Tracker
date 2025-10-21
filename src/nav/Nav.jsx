import {Link} from 'react-router-dom';
import {LogIn} from 'lucide-react'
function NavBar() {
  return (
    <>
    
    <nav className="flex w-full items-center justify-between px-8 shadow-sm"> 
        <div className="flex items-center gap-3">
            <div className="flex items-center justify-center gap-2">
            <img src="https://student.eschosys.com/images/logo.jpg" 
            alt="Logo" 
            width={60}
             />
             <p className="text-md font-bold logo xsm:hidden md:flex"> ESCHOSYS BHIFMET</p>
             </div>
             <Link to="/"> Home</Link>
            </div>

         <div className='flex items-center gap-4'>
            <button className='bg-yellow-600 text-white rounded-lg px-3 py-1 cursor-pointer transition-all duration-300 ease-in-out hover:bg-yellow-500'>
                Sign Up
                </button>
            <button className='bg-blue-900 text-white rounded-lg px-3 py-1 cursor-pointer transition-all duration-300 ease-in-out hover:bg-blue-800 flex items-center gap-2'>
                <LogIn size={17}/>Login
                </button>
         </div>

    </nav>
    </>

  )
}

export default NavBar;