import React from "react";
import NavBar from "../../../nav/Nav";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Signup() {
  const [formData, setFormData] = useState({
    //used for storing and setting or updating the value the user types into the input field
    firstname: "",
    lastname: "",
    email: "",
    role: "",
    level: "",
    dep: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState({
    // for storing error messages; error stores the error message for each input
    firstname: "", // if a field is incorrect setError i used to set the error message in beteen the quotes
    lastname: "", // if there are no errors the strinf remains empty
    email: "", //error stores current errors that the UI displays
    role: "", //whenever error changes, your form re-renders and shows a different message. Its like a display error
    level: "",
    dep: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  function handleOnChange(e) {
    //ensure that when a user want to change the name, or email or any other field, the values of the
    const name = e.target.name; // other fields remain intact and does not change. the only thing that will be updated is the value corresponding
    const value = e.target.value; // to the name property of the input field.

    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleOnSubmit(e) {
    e.preventDefault(); //prevents the form from reloading when the sign up button is clicked

    const errMsgs = {
      // These object stores any problem
      firstname: "", // it acts as a temporary container that collects the emails while validating and it only exist here
      lastname: "",
      email: "",
      role: "",
      level: "",
      dep: "",
      password: "",
      confirmPassword: "",
    };

    if (!formData.firstname) {
      errMsgs.firstname = "Enter your First Name";
    }
    if (!formData.lastname) {
      errMsgs.lastname = "Enter your Last Name";
    }
    if (!formData.email) {
      errMsgs.email = "Enter your Email";
    }
    if (!formData.role) {
      errMsgs.role = "Enter your role";
    }
    if (!formData.level) {
      errMsgs.level = "Enter your Level";
    }
    if (!formData.dep) {
      errMsgs.dep = "Enter your Department ";
    }
    if (!formData.password) {
      errMsgs.password = "Enter your Password";
    } else if (formData.password.length < 6) {
      errMsgs.password = "Password must be more than 6 characters";
    }
    if (!formData.confirmPassword) {
      errMsgs.confirmPassword = "Confirm Your Password";
    } else if (formData.confirmPassword != formData.password) {
      errMsgs.confirmPassword = "Incorrect Password";
    }
    setError(errMsgs); // this updates the UI so error messages appear under the input field in red
    //This takes all validation results from errMsgs and moves them into error state, causing the form to display them.

    // CHECK IF FORM HAS NO ERRORS
    const isValid = Object.values(errMsgs).every((msg) => msg === "");

    // Only redirect when there are **ZERO errors**
    if (isValid) {
      navigate("/studentdash");
    }
  }

  return (
    <>
      <div>
        {" "}
        <NavBar />{" "}
      </div>
      <div className="flex min-h-screen justify-center items-center bg-center bg-cover bg-[url(https://eschosys.com/wp-content/uploads/2024/08/slide_image_3.jpg)] text-white bg-no-repeat">
        <form
          action=""
          className="w-full max-w-lg shadow-lg h-auto gap-6 rounded-lg flex flex-col mt-10 p-6 sm:p-10 mx-4 bg-transparent backdrop-blur-xl"
          onSubmit={handleOnSubmit}
        >
          <div>
            <h1 className="text-center font-bold text-3xl text-black">Sign Up</h1>
            <p className="text-center font-semibold text-sm mt-2 text-black">
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
                className={`border ${
                  error.firstname && "border-red-500"
                } p-3 rounded-2xl `}
                onChange={handleOnChange}
              />{" "}
              {error.firstname && (
                <p className="text-red-500 text-sm">{error.firstname}</p>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="lastname">Last Name</label>
              <input
                type="text"
                placeholder="Enter your last name"
                name="lastname"
                className={`border ${
                  error.lastname && "border-red-500"
                } p-3 rounded-2xl `}
                onChange={handleOnChange}
              />{" "}
              {error.lastname && (
                <p className="text-red-500 text-sm">{error.lastname}</p>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              placeholder="Enter your Email"
              name="email"
              className={`border ${
                error.email && "border-red-500"
              } p-3 rounded-2xl `}
              onChange={handleOnChange}
            />
            {error.email && (
              <p className="text-red-500 text-sm">{error.email}</p>
            )}
          </div>

          <div className="flex gap-3">
            <div className="flex flex-col gap-2 flex-1">
              <label htmlFor="role">Role</label>
              <select
                name="role"
                id="role"
                className={`border ${
                  error.role && "border-red-500"
                } p-3 rounded-2xl `}
                onChange={handleOnChange}
              >
                <option value="" className="text-black">Choose your Role</option>
                <option value="Student" className="text-black">Student</option>
                <option value="Lecturer" className="text-black">Lecturer</option>
                <option value="Admin" className="text-black">Admin</option>
              </select>{" "}
              {error.role && (
                <p className="text-red-500 text-sm">{error.role}</p>
              )}
            </div>

            <div className="flex flex-col gap-2 flex-1">
              <label htmlFor="level">Level</label>
              <select
                name="level"
                id="level"
                className={`border ${
                  error.level && "border-red-500"
                } p-3 rounded-2xl `}
                onChange={handleOnChange}
              >
                <option value="" className="text-black">Choose your Level</option>
                <option value="one" className="text-black">One</option>
                <option value="two" className="text-black">Two</option>
                <option value="degree" className="text-black">Degree</option>
              </select>{" "}
              {error.level && (
                <p className="text-red-500 text-sm">{error.level}</p>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="dep">Department</label>
            <select
              name="dep"
              id="dep"
              className={`border ${
                error.dep && "border-red-500"
              } p-3 rounded-2xl `}
              onChange={handleOnChange}
            >
              <option value="one" className="text-black">Choose your Department</option>
              <option value="swe" className="text-black">Software Engineering</option>
              <option value="cbs" className="text-black">CyberSecurity</option>
              <option value="agr" className="text-black">Agriculture</option>
            </select>{" "}
            {error.dep && <p className="text-red-500 text-sm">{error.dep}</p>}
          </div>

          <div className="flex gap-3">
            <div className="flex flex-col gap-2">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="Enter your Password"
                name="password"
                className={`border ${
                  error.password && "border-red-500"
                } p-3 rounded-2xl `}
                onChange={handleOnChange}
              />{" "}
              {error.password && (
                <p className="text-red-500 text-sm">{error.password}</p>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="password">Confirm Password</label>
              <input
                type="password"
                placeholder="Confirm your Password"
                name="confirmPassword"
                className={`border ${
                  error.confirmPassword && "border-red-500"
                } p-3 rounded-2xl `}
                onChange={handleOnChange}
              />{" "}
              {error.confirmPassword && (
                <p className="text-red-500 text-sm">{error.confirmPassword}</p>
              )}
            </div>
          </div>

          <button
            className="bg-yellow-600 text-white rounded-lg p-2 hover:bg-yellow-500 cursor-pointer transition-all duration-300 ease-in-out"
            type="submit "
          >
            Sign Up
          </button>

          <p className=" text-center font-semibold">
            Already have an Account?{" "}
            <Link
              to="/login"
              className=" text-gray-900 cursor-pointer hover:underline"
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
