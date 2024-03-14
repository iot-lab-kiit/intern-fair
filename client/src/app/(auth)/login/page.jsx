"use client";
import React, { useState } from "react";
import { FaRegEyeSlash } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa6";
import Image from "next/image";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      <div className="content grid grid-cols-1 md:grid-cols-2 max-w-full mx-auto p-[1.75rem] sm:p-[0rem]">
        <div className="form-container flex flex-col  items-center space-y-6 mbMini:p-[0.25rem] mbXSmall:p-[1.5rem] mbSmall:p-[1.75rem] mbMedium:p-[1.5rem] ">
          <div className="back-button mb-4  flex  w-full md:w-[80%]">
            <div className="back-button flex gap-3 items-center justify-center">
              <div className="h-5 w-5">
                <Image src="/images/back.png" height={20} width={20} />
              </div>
              <div>Back</div>
            </div>
          </div>

          <div className="header flex flex-col w-full md:w-[80%] text-center md:text-start">
            <div className="font-extrabold text-3xl">Login</div>
            <div>Enter your email and password to sign in!</div>
          </div>
          <div className="google-signup flex items-center justify-center bg-[#F4F5FA] w-[98%] sm:w-5/6 h-12 rounded-lg">
            <div className="mr-2">
              <Image
                src="/images/Group.png"
                height={20}
                width={20}
                alt="google"
              />
            </div>
            <div>Sign in with Google</div>
          </div>
          {/* Or with lines */}
          <div className="flex flex-col w-[80%]  items-center">
            <Image
              src="/images/Separator.png"
              height={500}
              width={800}
              alt="separator"
            />
          </div>
          <form className="flex flex-col gap-3 w-full md:w-[80%]">
            <label htmlFor="email" className="text-[#182467]">
              Email*
            </label>
            <input
              type="email"
              id="email"
              className="w-full h-12 border-2 rounded-lg px-4 focus:border-blue-500"
            />
            <label htmlFor="password" className="text-[#182467]">
              Password*
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                className="w-full h-12 border-2 rounded-lg px-4 focus:border-[#1F3DD9]"  
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-6 top-[50%] -translate-y-1/2"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  <FaRegEye
                  height={20}
                  width={20}
                  style={{ color: '#A3AED0' , width:'20px' }}
                  />
                ) : (
                  <FaRegEyeSlash 
                  height={20}
                  width={20}
                  style={{ color: '#A3AED0' , width:'20px' }}
                  />
                )}
              </button>
            </div>
            <div className="flex     mbXSmall:items-center mbMini:flex-col mbMini:gap-1 mbXSmall:flex-row  justify-between ">
              <div className="flex items-center">
                <input type="checkbox" id="check" className="mr-2" />
                <label
                  htmlFor="check"
                  className="text-[#3A4264] text-sm font-sans text-nowrap mbMini:mr-4"
                >
                  Keep me Logged
                </label>
              </div>

              <div className=" text-[#1F3DD9] text-sm font-sans text-nowrap mbMini:ml-5">
                Forgot Password?
              </div>
            </div>

            <button className="bg-[#1F3DD9]  text-white  h-12 w-1/2 rounded-lg">
              Sign In
            </button>
          </form>
          <div className=" w-full md:w-[80%]">
            Not registered yet?{" "}
            <a href="#" className="text-[#1F3DD9]">
              Create an Account
            </a>
          </div>
        </div>

        <div className="image-container w-full h-full hidden md:block">
          <Image
            src="/images/signup.png"
            alt="signup-image"
            height={500}
            width={500}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>
    </>
  );
}
