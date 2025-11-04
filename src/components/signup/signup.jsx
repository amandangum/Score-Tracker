import React from "react";
import NavBar from "../../nav/Nav";
import Login from "../Login/Login";
import { Link } from "react-router";

function Signup() {
  return (
    <>
      <div>
        {" "}
        <NavBar />{" "}
      </div>
      <div className="flex h-[60vh] justify-center items-center mt-45">
        <form
          action=""
          className="w-full max-w-lg shadow-lg h-auto gap-6 rounded-lg flex flex-col mt-30 p-6 sm:p-10 mx-4"
        >
          <div>
            <h1 className="text-center font-bold text-3xl">Sign Up</h1>
            <p className="text-center font-semibold text-sm mt-2">
              Fill the information below to create an account
            </p>
          </div>

          <div className="flex gap-3">
            <div className="flex flex-col gap-2">
              <label htmlFor="firstname">First Name</label>
              <input
                type="text"
                placeholder="Enter your first name"
                name="firstname"
                className="border border-gray-600 p-3 rounded-lg "
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="lastname">Last Name</label>
              <input
                type="text"
                placeholder="Enter your last name"
                name="lastname"
                className="border border-gray-600 p-3 rounded-lg "
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              placeholder="Enter your Email"
              name="email"
              className="border border-gray-600 p-3 rounded-lg "
            />
          </div>
      
             <div className="flex gap-3">
          <div className="flex flex-col gap-2 flex-1">
            <label htmlFor="role">Role</label>
            <select
              name="role"
              id="role"
              className="border border-gray-600 p-3 rounded-lg w-full"
            >
              <option value="Student">Student</option>
              <option value="Lecturer">Lecturer</option>
              <option value="Admin">Admin</option>
            </select>
          </div>

          <div className="flex flex-col gap-2 flex-1">
            <label htmlFor="level">Level</label>
            <select
              name="level"
              id="level"
              className="border border-gray-600 p-3 rounded-lg w-full "
            >
              <option value="one">One</option>
              <option value="two">Two</option>
              <option value="degree">Degree</option>
            </select>
          </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="dep">Department</label>
            <select
              name="dep"
              id="dep"
              className="border border-gray-600 p-3 rounded-lg "
            >
              <option value="swe">Software Engineering</option>
              <option value="cbs">CyberSecurity</option>
              <option value="agr">Agriculture</option>
            </select>
          </div>
            
            <div className="flex gap-3">
                 <div className="flex flex-col gap-2">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Enter your Password"
              name="password"
              className="border border-gray-600 p-3 rounded-lg "
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="password">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm your Password"
              name="password"
              className="border border-gray-600 p-3 rounded-lg "
            />
          </div>
            </div>
          

          <button className="bg-yellow-600 text-white rounded-lg p-2 hover:bg-yellow-500 cursor-pointer transition-all duration-300 ease-in-out">
            Login
          </button>

          <p className=" text-center font-semibold">
            Already have an Account?{" "}
            <Link
              to="/login"
              className=" text-yellow-600 cursor-pointer hover:underline"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </>
  );
}

export default Signup;
