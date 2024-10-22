import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
    const[message,srtMessage]=useState("")
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    const handleGoggleSignIn=()=>{

    }

  return (
    <div className="h-[calc(100vh-120px)] flex justify-center items-center border">
      <div className="w-full max-w-sm mx-auto bg-white shadow-md px-8 pt-6 pb-8 mb-4">
        <h2 className="font-semibold text-xl mb-4">Please Login</h2>
        <form onSubmit={handleSubmit(onSubmit)} >
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
                <input  {...register("email", { required: true })}
                 type="email" name="email" id="email" placeholder="Email Address" className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow" />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
                <input  {...register("password", { required: true })}
                 type="password" name="password" id="password" placeholder="Password here.." className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow" />
            </div>
            {message && <p className="text-red-500 text-xs italic mb-3">{message}</p>}
            <div>
                <button className="bg-blue-400 hover:bg-blue-700 font-bold py-2 px-8 rounded text-white focus:outline-none">Login</button>
            </div>
        </form>
        <p className="align-baseline font-medium mt-4 text-sm">Haven't an account? Please<Link to='/register' className="text-blue-500 hover:text-blue-700"> Register</Link></p>
        {/* google sign in  */}
       <div className="mt-4">
       <button onClick={handleGoggleSignIn} className="w-full flex flex-wrap gap-1 items-center justify-center bg-secondary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none"><FaGoogle /> Sign in with Google</button>
       </div>
       <p className="mt-5 text-center text-gray-600 text-xs">@2024 Book Store All Rights Reserved</p>
      </div>
      
    </div>
  );
};

export default Login;