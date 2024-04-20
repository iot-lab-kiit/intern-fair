"use client";
import React, { useState } from "react";
import { FaRegEyeSlash } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa6";
import Image from "next/image";
import { getUserr } from "@/actions/user";
import { toast } from "react-hot-toast";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();

    toast.promise(getUserr(formData), {
      loading: "Creating Account...",
      success: (res) => {
        setTimeout(() => {
          router.push("/");
        }, 2000);
        if (res.result.access_token)
          document.cookie =
            "user_session" + "=" + (res.result.access_token || "");
        ("; path=/");
        return <b>{res.message}</b>;
      },
      error: (err) => <b>{err.message}</b>,
    });
  };
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="content flex justify-center items-center  max-w-full mx-auto p-[1.75rem] sm:p-[0rem] ">
        <div className="flex flex-col justify-center items-center max-w-1/2 mx-auto gap-4 place-self-center">
          <div className="back-button text-xl  flex  w-full sm:w-[70%] h-16 ">
            <div className="back-button flex gap-3 items-center justify-center">
              <div className="h-5 w-5">
                <Image src="/images/back.png" height={20} width={20} />
              </div>
              <div>Back</div>
            </div>
          </div>
          <div className="form-container  flex flex-col items-center justify-center gap-[1.8rem] h-auto w-full sm:w-full flex-grow-1 flex-shrink-0 ">
            <div className="header flex flex-col gap-4 w-full sm:w-[70%] text-center sm:text-start">
              <div className="font-extrabold text-3xl md:text-5xl">Login</div>
              <div className="text-xl">
                Enter your email and password to sign in!
              </div>
            </div>
            <div className="google-signup flex items-center justify-center bg-[#F4F5FA] w-[98%] sm:w-[70%] h-12 rounded-lg">
              <div className="mr-2">
                <Image
                  src="/images/Group.png"
                  height={20}
                  width={20}
                  alt="google"
                />
              </div>
              <div className="text-xl">Sign in with Google</div>
            </div>
            {/* Or with lines */}
            <div className="flex flex-col w-[60%]  items-center">
              <Image
                src="/images/Separator.png"
                height={500}
                width={800}
                alt="separator"
              />
            </div>
            <form
              className="flex  flex-col gap-3 w-full sm:w-[70%]"
              onSubmit={(e) => handleSubmit(e)}
            >
              <label htmlFor="email" className="text-[#182467] text-xl">
                Email*
              </label>
              <input
                type="email"
                id="email"
                className="w-full h-12 border-2 rounded-lg px-4 focus:border-blue-500"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
              <label htmlFor="password" className="text-[#182467] text-xl">
                Password*
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  className="w-full h-12 border-2 rounded-lg px-4 focus:border-[#1F3DD9]"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
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

              <button className="bg-[#1F3DD9]  text-white text-xl h-12 w-1/2 rounded-lg">
                Sign In
              </button>
              <div className=" w-full sm:w-[70%] text-base">
                Not registered yet?{" "}
                <Link href="/signup" className="text-[#1F3DD9]">
                  Create an Account
                </Link>
              </div>
            </form>
          </div>
        </div>

        <div className="image-container w-[45%] h-screen  hidden lg:block">
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
