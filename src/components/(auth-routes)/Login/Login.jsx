import React from "react";
import { Link } from "react-router";
import NavBar from "../../../nav/Nav";
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

      <div className="flex h-screen justify-center items-center text-white bg-no-repeat bg-center bg-cover bg-[url(https://eschosys.com/wp-content/uploads/2024/08/slide_image.jpg)]">
        <form
          action=""
          className="shadow-lg w-full max-w-md h-auto gap-6 rounded-lg flex flex-col p-6 sm:p-10 mx-4 bg-transparent backdrop-blur-lg"
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

          <button className="bg-yellow-600 text-white rounded-lg p-2 hover:bg-yellow-400 cursor-pointer transition-all duration-300 ease-in-out">
            Login
          </button>

          <div className="flex justify-between ">
            <div className="flex gap-1">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember" className="text-sm text-white00">
                Remember Me
              </label>
            </div>

            <Link to={"/forgot-password"} className="text-sm text-yellow-600 hover:underline cursor-pointer">
              Forgot Password?
            </Link>
          </div>

          <p className=" text-sm text-center font-semibold">
            Don't have an account? {" "}
            <Link
              to="/signup"
              className="text-yellow-600 hover:underline cursor-pointer"
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
