"use client";
import React, { useState, useEffect } from "react";
import { FaRegEyeSlash } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa6";
import Image from "next/image";
import { getUserr } from "@/actions/user";
import { toast } from "react-hot-toast";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function page() {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: "" });
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    validateForm();
  }, [formData]);

  const validateForm = () => {
    const isEmailValid = /\S+@\S+\.\S+/.test(formData.email);

    setIsFormValid(isEmailValid);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    validateForm();

    if (!isFormValid) {
      if (!formData.email) {
        toast.error("Email is required");
        return;
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        toast.error("Invalid email");
        return;
      }
    }

    toast.promise(getUserr(formData), {
      loading: "Loggin in...",
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

  const handleBackButtonClick = () => {
    router.back();
  };

  return (
    <>
      <div className="content h-screen flex justify-center items-center w-screen max-w-full mx-auto p-[1.75rem] sm:p-[0rem] ">
        <div className="flex flex-col justify-center  mx-auto gap-4 place-self-center max-h-screen">
          {/* <div
            className="back-button text-base  flex  w-full sm:w-[100%] h-16 "
            onClick={handleBackButtonClick}
          >
            <div className="back-button flex gap-3 items-center justify-center">
              <div className="h-5 w-5">
                <Image src="/images/back.png" height={20} width={20} />
              </div>
              <div>Back</div>
            </div>
          </div> */}
          <div className="form-container  flex flex-col items-center justify-center gap-[1rem] tbLandscape:gap-6 h-auto w-full sm:w-full flex-grow-1 flex-shrink-0 ">
            <div className="header flex flex-col gap-3 tbLandscape:gap-4 w-full sm:w-[100%] text-start">
              <div className="font-extrabold text-2xl mbXSmall:text-3xl mbSmall:text-4xl tbLandscape:text-5xl ">
                Forgot Password
              </div>
              <div className=" text-base mbXSmall:text-lg mbSmall:text-xl tbLandscape:text-2xl">
                Enter your email to receive a reset link!
              </div>
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

            <form
              className="flex  flex-col gap-2 tbLandscape:gap-4 w-full "
              onSubmit={(e) => handleSubmit(e)}
            >
              <label
                htmlFor="email"
                className="text-[#182467] text-sm mbXSmall:text-base mbSmall:text-lg tbLandscape:text-xl "
              >
                Email*
              </label>
              <input
                type="email"
                id="email"
                className="w-full h-10 border-2 rounded-lg px-4 focus:border-blue-500 outline-none "
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
              <div className="flex flex-col items-center justify-center gap-4 mt-3">
                <button className="bg-[#1F3DD9]  text-white text-base mbXSmall:text-lg mbSmall:text-xl tbLandscape:text-2xl h-12 w-full rounded-lg">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* <div className="image-container w-[45%] tbLandscape:w-[50%] h-full  hidden lg:block">
          <Image
            src="/images/signup.png"
            alt="signup-image"
            height={500}
            width={500}
            style={{ width: "100%", height: "100%" }}
            className="max-h-screen"
          />
        </div> */}
      </div>
    </>
  );
}
