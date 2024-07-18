"use client";
import React, { useState, useEffect } from "react";
import { FaRegEyeSlash } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa6";
import Image from "next/image";
import { resetPassword } from "@/actions/user";
import { toast } from "react-hot-toast";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
export default function page() {
  const { token } = useParams();
  const router = useRouter();
  const [formData, setFormData] = useState({
    // email: "",
    password: "",
    cnfpassword: "",
  });
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    validateForm();
  }, [formData]);

  const validateForm = () => {
    const isPasswordValid =
      formData.password.length >= 6 && formData.password.length <= 20;
    const doPasswordsMatch = formData.password === formData.cnfpassword;
    setIsFormValid(doPasswordsMatch && isPasswordValid);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    validateForm();

    if (!isFormValid) {
      if (!formData.password) {
        toast.error("Password is required");
        return;
      } else if (formData.password.length < 6) {
        toast.error("Password must be at least 6 characters");
        return;
      } else if (formData.password.length > 20) {
        toast.error("Password cannot be more than 20 characters");
        return;
      } else if (formData.password !== formData.cnfpassword) {
        toast.error("Passwords do not match");
        return;
      }
    }

    function getQueryParam(param) {
      const urlParams = new URLSearchParams(window.location.search);
      return urlParams.get(param);
    }
    const token = getQueryParam("token");

    toast.promise(resetPassword(formData, token), {
      loading: "resetting password..",
      success: (res) => {
        // setTimeout(() => {
        //   router.push("/");
        // }, 2000);
        // if (res.result.access_token)
        //   document.cookie =
        //     "user_session" + "=" + (res.result.access_token || "");
        // ("; path=/");
        return <b>{res.message}</b>;
      },
      error: (err) => <b>{err.message}</b>,
    });
  };
  const [showPassword, setShowPassword] = useState(false);
  const [showCnfPassword, setShowCnfPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleBackButtonClick = () => {
    router.back();
  };

  return (
    <>
      <div className="content h-screen flex justify-center  items-center w-screen max-w-full mx-auto p-[1.75rem] sm:p-[0rem] ">
        <div className="flex flex-col  mx-auto gap-4 overflow-hidden pr-10 ">
          <div
            className="back-button text-base absolute top-2  items-center justify-center h-10 cursor-pointer left-5 flex "
            onClick={handleBackButtonClick}
          >
            <div className="back-button flex gap-3 items-center h-10 justify-center">
              <div className=" h-3.5 w-3.5 self-bottom mbXSmall:h-4 mbXSmall:w-4 mbSmall:h-5 :mbSmall:w-5">
                <Image src="/images/back.png" height={20} width={20} />
              </div>
              <div className=" text-sm mbSmall:text-base self-center absolute bottom-2.5 left-6">
                Back
              </div>
            </div>
          </div>

          <div className="form-container  flex flex-col items-center justify-center gap-[0.5rem] h-auto w-full sm:w-full flex-grow-1 flex-shrink-0 ">
            <div className="header flex flex-col gap-2 w-full sm:w-[100%] text-start">
              <div className="font-extrabold text-2xl mbSmall:text-3xl tbLandscape:text-4xl ">
                New Password
              </div>
              <div className="text-sm mbXSmall:text-base tbLandscape:text-lg">
                Enter your new password to sign in!
              </div>
            </div>

            <form
              className="flex  flex-col gap-3 w-full "
              onSubmit={(e) => handleSubmit(e)}
            >
              <label
                htmlFor="password"
                className="text-[#182467] text-sm mbXSmall:text-base tbLandscape:text-lg"
              >
                Password*
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  className="w-full h-10 border-2 rounded-lg px-4 focus:border-[#1F3DD9] outline-none "
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
              <label
                htmlFor="password"
                className="text-[#182467] text-sm mbXSmall:text-base tbLandscape:text-lg"
              >
                Confirm Password*
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showCnfPassword ? "text" : "password"}
                  className="w-full h-10 border-2 rounded-lg px-4 focus:border-[#1F3DD9] outline-none "
                  value={formData.cnfpassword}
                  onChange={(e) =>
                    setFormData({ ...formData, cnfpassword: e.target.value })
                  }
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-6 top-[50%] -translate-y-1/2"
                  onClick={() => setShowCnfPassword(!showCnfPassword)}
                >
                  {showCnfPassword ? (
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

              <div className="flex flex-col items-center justify-center gap-4 mt-3">
                <button className="bg-[#1F3DD9]  text-white text-base mbXSmall:text-lg tbLandscape:text-xl h-10 w-full rounded-lg">
                  Reset Password
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="image-container w-[45%] tbLandscape:w-[50%] h-full hidden lg:block">
          <Image
            src="/images/signup.png"
            alt="signup-image"
            height={500}
            width={500}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
            }}
            className="max-h-screen"
          />
        </div>
      </div>
    </>
  );
}
