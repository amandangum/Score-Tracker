import {Link} from 'react-router-dom';
import {LogIn} from 'lucide-react'
function NavBar() {
  return (
    <>
    
    
    <nav className="flex w-full items-center justify-between px-8 py-6 shadow-sm"> 
        <div className="flex items-center gap-3">
            <div className="flex items-center justify-center gap-2 ">
            <img src="https://student.eschosys.com/images/logo.jpg" 
            alt="Logo" 
            width={60}
            className='bg-blue-50'
             />
             <p className="text-md font-bold logo xsm:hidden md:flex"> ESCHOSYS BHIFMET</p>
             </div>
             <Link to="/"> Home</Link>
            </div>

         <div className='flex items-center gap-4'>
           
            <Link to='/login' className='text-gray-500 rounded-lg px-3 py-1 cursor-pointer transition-all duration-300 ease-in-out shadow-lg border flex items-center gap-2 hover:bg-gray-800 hover:text-white'>
                <LogIn size={17}/>Login
                </Link>
         </div>

    </nav>
    </>

  )
}

export default NavBar;