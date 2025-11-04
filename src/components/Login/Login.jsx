import React from "react";
import NavBar from "../../nav/Nav";

function Login() {
  return (
    <>
      <div>
        <NavBar />
      </div>

      <div className="flex h-[70vh] justify-center items-center ">
        <form
          action=""
          className="shadow-lg w-95 h-110 gap-6 rounded-lg flex flex-col mt-20 p-10"
        > 
        <div>
            <h2 className="text-3xl font-bold text-center"><span className="">Eschyosys</span>-Login </h2>
           <p className="text-sm text-center mt-2">Log into Your account</p>
        </div>
          

          <input
            type="text"
            name="email"
            placeholder="Email"
            className="border border-gray-500 p-3 rounded-2xl "
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="border border-gray-500 p-3 rounded-2xl"
          />

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

            <p className=" text-sm text-center font-semibold">Don't have an account? <a className="text-blue-600 hover:underline cursor-pointer">Signup</a></p>
           </form>
      </div>
    </>
  );
}

export default Login;
