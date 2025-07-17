import React, { useState } from "react";
import assets from "../assets/assets";

const LoginPage = () => {
  const [currState, setCurrState] = useState("Sign up"); // Initialize state for current form state
  const [fullName, setFullName] = useState(""); // Initialize state for full name
  const [email, setEmail] = useState(""); // Initialize state for email
  const [password, setPassword] = useState(""); // Initialize state for password
  const [bio, setBio] = useState("");
  const [isDataSubmitted, setIsDataSubmitted] = useState(false); 

  const toggleAuthState = () => {
    setCurrState(currState === "Sign up" ? "Login" : "Sign up"); 
  };
  const onSubmitHamdler =(event)=>{
    event.preventDefault();
    if(currState ==='Sign up' && !isDataSubmitted){
      setIsDataSubmitted(true);
      return;
    }
  }

  return (
    <div className="min-h-screen bg-cover bg-center flex items-center justify-center gap-8 sm:justify-evenly max-sm:flex-col backdrop-blur-2xl px-4">
      {/* ------- Left: Logo ------- */}
      <img
        src={assets.logo_big}
        alt="App Logo"
        className="w-[min(30vw,250px)]"
      />

      {/* ------- Right: Form Container ------- */}
       <form  onSubmit={onSubmitHamdler} className='border-2 bg-white/8 text-white border-gray-500 p-6 flex flex-col gap-6 rounded-lg shadow-lg'>
      <h2 className='font-medium text-2xl flex justify-between items-center'>
        {currState}
        {
          isDataSubmitted && 
          <img onClick={()=>setIsDataSubmitted(false)} src={assets.arrow_icon} alt="" className='w-5 cursor-pointer' />
        }
      </h2>

      {currState === "Sign up" && !isDataSubmitted && (
        <input
          onChange={(e)=>setFullName(e.target.value)} value={fullName}
          type="text"
          className='p-2 border border-gray-500 rounded-md focus:outline-none'
          placeholder="Full Name"
          required
        />
      )}
      {!isDataSubmitted &&(
        <>
          <input onChange={(e)=>setEmail(e.target.value)} value={email} type="email" placeholder="Email Address" required className="p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
           <input onChange={(e)=>setPassword(e.target.value)} value={password} type="password" placeholder="password" required className="p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
        </>
      )}
      {
        isDataSubmitted && currState==='Sign up'&& (
          <textarea name="bio"  rows={4} placeholder="Provide a Short bio..." onChange={(e)=>setBio(e.target.value)} value={bio} className="p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" required></textarea>
        )
      }
      
      {
        currState === 'Sign up' && (
          <div className="flex items-center gap-2 text-sm  text-gray-500 cursor-pointer">
        <input type="checkbox" id="privacy" />
        <label for='privacy' className="cursor-pointer">Agree to the terms of use and Privacy Policy</label>
      </div>
        )
      }

      <button type="submit" className="
             bg-gradient-to-r from-purple-400 to-violet-600 
             text-white text-sm font-light py-2 px-20 
             rounded-full cursor-pointer border-none">
        {currState === 'Sign up' ? 'Create Account' : "Login Now"}
      </button>

       <div className='flex flex-col gap-2'>
      {currState === "Sign up" ? ( // Conditional rendering based on currState
        <p className='text-sm text-gray-600'>
          Already have an account?{' '}
          <span
            className='font-medium text-violet-500 cursor-pointer'
            onClick={() => {
              toggleAuthState();
              setIsDataSubmitted(false);
            }}
          >
            Login here
          </span>
        </p>
      ) : (
        <p className='text-sm text-gray-600'>
          Create an account{' '}
          <span
            className='font-medium text-violet-500 cursor-pointer'
            onClick={toggleAuthState} 
          >
            Click here
          </span>
        </p>
      )}
    </div>

    </form>
    </div>
  );
};

export default LoginPage;
