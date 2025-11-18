import React from "react";
import { Link } from "react-router";
import NavBar from "../../../nav/Nav";
import { useState } from "react";

function ForgotPassword() {
  const [formData, setFormData] = useState({
    email:"",
    OTP: "",
    password:"",
  });

  const [error, setError] = useState({
    email:"",
    OTP: "",
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
                OTP: "",
                password:"",
            };

            if(!formData.email){
                errMsgs.email= "Email is required";
            }
            if(!formData.OTP){
                errMsgs.OTP= "OTP number is required";
            }

            if(!formData.password){
               errMsgs.password= "New Password is required";
            } else if(formData.password.length < 6){
                errMsgs.password = " New Passord must be 6 characters and above";
            }
            setError(errMsgs);
        }

         
  return (
    <>
      <div>
        <NavBar />
      </div>

      <div className="flex h-screen justify-center items-center bg-[url(https://eschosys.com/wp-content/uploads/2024/08/slide_image_3.jpg)] bg-center bg-cover text-black">
        <form
          action=""
          className="shadow-lg w-full max-w-md h-auto gap-6 rounded-lg flex flex-col p-6 sm:p-10 mx-4 bg-transparent backdrop-blur-lg"
          onSubmit={handleOnSubmit}
        >
          <div>
            <h2 className="text-3xl font-bold text-center">
             Reset Password
            </h2>
            <p className="text-sm text-center mt-2">Enter the information below to reset your password</p>
          </div>
           
           <div className="flex items-center gap-5">
            <div className="flex flex-col ">
            <input
            type="text"
            name="email"
            placeholder="Email"
            className={`border ${error.email && 'border-red-500'} p-3 rounded-2xl `} 
            onChange={handleOnChange}
          /> 
          {error.email && (<p className="text-red-500 text-sm mt-5">{error.email}</p>)}
            </div>

          <button className="bg-yellow-600 w-50 text-white rounded-2xl p-3 hover:bg-yellow-400 cursor-pointer transition-all duration-300 ease-in-out">
           Send OTP
          </button>
           </div>
          <input
            type="number"
            name="OTP"
            placeholder="Enter the OTP sent to your email"
            className={`border ${error.OTPNumber && 'border-red-500'} p-3 rounded-2xl `} 
            onChange={handleOnChange}
            /> {error.OTP && (<p className="text-red-500 text-sm">{error.OTP}</p>)}

          <input
            type="password"
            name="password"
            placeholder="New Password"
            className={`border ${error.newPassword && 'border-red-500'} p-3 rounded-2xl `} 
            onChange={handleOnChange}
          /> {error.password && (<p className="text-red-500 text-sm">{error.password}</p>)}

          <button className="bg-yellow-600 text-white rounded-lg p-2 hover:bg-yellow-400 cursor-pointer transition-all duration-300 ease-in-out">
           Reset Password
          </button>

          <div className="flex justify-between ">
            <p className=" text-sm text-center font-semibold">
            Don't have an account? {" "}
            <Link
              to="/signup"
              className="text-yellow-600 hover:underline cursor-pointer"
            >
              Signup
            </Link>
          </p>

            <p className="text-sm text-yellow-600 hover:underline cursor-pointer">
              Rememder Password?
            </p>
          </div>

          
        </form>
      </div>
    </>
  );
}

export default ForgotPassword;
