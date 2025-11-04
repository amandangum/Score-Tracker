import React from "react";
import { Link } from "react-router";
import NavBar from "../../nav/Nav";
import { useState } from "react";

function Login() {
         const [formData, setFormData]  = useState({
            email:"",
            password:"",
         });

         const [error, setError] = useState({
            email:"",
            password:"",
         });

          function handleOnChange(e){
           const name = e.target.name;
           const value = e.target.value;
        
           setFormData((prev) => ({...prev, [name]: value}));
              
           console.log(formData);
           
          }

        function handleOnSubmit(e){
            e.preventDefault();

            const errMsgs = {
                email:"",
                password: "",
            };

            if(!formData.email){
                errMsgs.email= "Email is required";
            }

            if(!formData.password){
               errMsgs.password= "Password is required";
            } else if(formData.password.length < 6){
                errMsgs.password = "Passord must be 6 characters and above";
            }
            setError(errMsgs);
        }

  return (
    <>
      <div>
        <NavBar />
      </div>

      <div className="flex h-[70vh] justify-center items-center ">
        <form
          action=""
          className="shadow-lg w-full max-w-md h-auto gap-6 rounded-lg flex flex-col mt-30 p-6 sm:p-10 mx-4"
          onSubmit={handleOnSubmit}
        >
          <div>
            <h2 className="text-3xl font-bold text-center">
              <span className="">Eschyosys</span>-Login{" "}
            </h2>
            <p className="text-sm text-center mt-2">Log into Your account</p>
          </div>
           
          <input
            type="text"
            name="email"
            placeholder="Email"
            className={`border ${error.email && 'border-red-500'} p-3 rounded-2xl `} 
            onChange={handleOnChange}
          /> {error.email && (<p className="text-red-500 text-sm">{error.email}</p>)}

          <input
            type="password"
            name="password"
            placeholder="Password"
            className={`border ${error.password && 'border-red-500'} p-3 rounded-2xl `}
            onChange={handleOnChange}
          /> {error.password && (<p className="text-red-500 text-sm">{error.password}</p>)}

          <button className="bg-blue-800 text-white rounded-lg p-2 hover:bg-blue-600 cursor-pointer transition-all duration-300 ease-in-out">
            Login
          </button>

          <div className="flex justify-between ">
            <div className="flex gap-1">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember" className="text-sm text-gray-700">
                Remember Me
              </label>
            </div>

            <p className="text-sm text-blue-600 hover:underline cursor-pointer">
              Forgot Password?
            </p>
          </div>

          <p className=" text-sm text-center font-semibold">
            Don't have an account?
            <Link
              to="/signup"
              className="text-blue-600 hover:underline cursor-pointer"
            >
              Signup
            </Link>
          </p>
        </form>
      </div>
    </>
  );
}

export default Login;
