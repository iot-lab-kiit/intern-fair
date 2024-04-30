"use client";
import React, { useState } from "react";
import { FaRegEyeSlash } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa6";
import Image from "next/image";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  

  return (
    <>
      <div className="content flex justify-center items-center  max-w-full mx-auto p-[1.75rem] sm:p-[0rem] ">
        <div className="flex flex-col justify-center  mx-auto gap-4 place-self-center max-h-screen">
          <div className="back-button text-base  flex  w-full sm:w-[100%] h-16 ">
            <div className="back-button flex gap-3 items-center justify-center">
              <div className="h-5 w-5">
                <Image src="/images/back.png" height={20} width={20} />
              </div>
              <div>Back</div>
            </div>
          </div>
          <div className="form-container  flex flex-col items-center justify-center gap-[0.5rem] h-auto w-full sm:w-full flex-grow-1 flex-shrink-0 ">
            <div className="header flex flex-col gap-2 w-full sm:w-[100%] text-start">
              <div className="font-extrabold text-3xl ">Login</div>
              <div className="text-base">Enter your email and password to sign in!</div>
            </div>
            <div className="google-signup flex items-center justify-center bg-[#F4F5FA] w-[98%] sm:w-[100%] h-10 rounded-lg">
              <div className="mr-2">
                <Image
                  src="/images/Group.png"
                  height={20}
                  width={20}
                  alt="google"
                />
              </div>
              <div className="text-base">Sign in with Google</div>
            </div>
            {/* Or with lines */}
            {/* <div className="flex flex-col w-[100%] sm:w-[60%] h-[1.75rem] sm:h-[100%] items-center">
              <Image
                src="/images/Separator.png"
                height={10000}
                width={800}
                alt="separator"
                className="w-[100%] h-[100%]"
              />
            </div> */}
              <div className="flex flex-row gap-2 w-[100%] sm:w-[100%] h-[1.75rem] sm:h-[100%] items-center">
            <div className="separator w-[100%] h-[2px] bg-[#E0E5F2] my-4"></div>
            <div className="text-gray-500 text-xs">or</div>
            <div className="separator w-[100%] h-[2px] bg-[#E0E5F2] my-4"></div>
          </div>
           
            <form className="flex  flex-col gap-2 w-full ">
              <label htmlFor="email" className="text-[#182467] text-base">
                Email*
              </label>
              <input
                type="email"
                id="email"
                className="w-full h-10 border-2 rounded-lg px-4 focus:border-blue-500"
              />
              <label htmlFor="password" className="text-[#182467] text-base">
                Password*
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  className="w-full h-10 border-2 rounded-lg px-4 focus:border-[#1F3DD9]"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-6 top-[50%] -translate-y-1/2"
                  onClick={() => {
                    setShowPassword(!showPassword);
                  }}
                >
                  {showPassword ? (
                    <FaRegEye
                      height={20}
                      width={20}
                      style={{ color: "#A3AED0", width: "20px" }}
                    />
                  ) : (
                    <FaRegEyeSlash
                      height={20}
                      width={20}
                      style={{ color: "#A3AED0", width: "20px" }}
                    />
                  )}
                </button>
              </div>
              <div className="flex     mbXSmall:items-center mbMini:flex-col mbMini:gap-1 mbXSmall:flex-row  justify-between ">
                <div className="flex items-center">
                  <input type="checkbox" id="check" className="mr-2" />
                  <label
                    htmlFor="check"
                    className="text-[#3A4264] text-base font-sans text-nowrap mbMini:mr-4"
                  >
                    Keep me Logged
                  </label>
                </div>

                <div className=" text-[#1F3DD9] text-base font-sans text-nowrap mbMini:ml-5">
                  Forgot Password?
                </div>
              </div>

              <button className="bg-[#1F3DD9]  text-white text-lg h-10 w-1/2 rounded-lg">
                Sign In
              </button>
              <div className=" w-full sm:w-[100%] text-base">
            Not registered yet?{" "}
            <a href="/signup" className="text-[#1F3DD9]">
              Create an Account
            </a>
          </div> 
            </form>
          </div>

          
        </div>

        <div className="image-container w-[45%] max-h-screen  hidden lg:block">
          <Image
            src="/images/signup.png"
            alt="signup-image"
            height={500}
            width={500}
            style={{ width: "100%", height: "100%" }}
            className="max-h-screen"
          />
        </div>
      </div>
    </>
  );
}
