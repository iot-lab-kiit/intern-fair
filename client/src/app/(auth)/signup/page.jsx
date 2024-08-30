"use client";
import React, { useState, useEffect } from "react";
import { FaRegEyeSlash } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa6";
import Image from "next/image";
import { createUserr, getUserr, googleCreateUserr } from "@/actions/user";
import { toast } from "react-hot-toast";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import firebase from "../../utils/firebase.js";

const provider = new GoogleAuthProvider();
const auth = getAuth(firebase);
export default function Signup() {
  const redirectParams = useSearchParams().get("redirect");

  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleBackButtonClick = () => {
    router.back();
  };

  useEffect(() => {
    validateForm();
  }, [formData]);

  const validateForm = () => {
    const isNameValid = formData.name.trim() !== "";
    const isEmailValid = /\S+@\S+\.\S+/.test(formData.email);
    const isPasswordValid =
      formData.password.length >= 6 && formData.password.length <= 20;

    setIsFormValid(isNameValid && isEmailValid && isPasswordValid);
  };

  const handleCreateUser = (e) => {
    e.preventDefault();
    validateForm();
    const isTermsChecked = e.target.check.checked;

    if (!isFormValid || !isTermsChecked) {
      if (!isFormValid) {
        if (!formData.name) {
          toast.error("Name is required");
          return;
        }
        if (!formData.email) {
          toast.error("Email is required");
          return;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
          toast.error("Invalid email");
          return;
        }
        if (!formData.password) {
          toast.error("Password is required");
          return;
        } else if (formData.password.length < 6) {
          toast.error("Password must be at least 6 characters");
          return;
        } else if (formData.password.length > 20) {
          toast.error("Password cannot be more than 20 characters");
          return;
        }
      }
      if (!isTermsChecked) {
        toast.error("Please accept the Terms and Services");
        return;
      }
    }
    toast.promise(createUserr(formData), {
      loading: "Creating Account...",
      success: (res) => {
        getUserr(formData)
          .then((resposne) => {
            setTimeout(() => router.push(redirectParams || "/"), 1500);
            if (res.result.access_token)
              document.cookie =
                "user_session" + "=" + (res.result.access_token || "");
            ("; path=/");
          })
          .catch(() => {
            toast.error("Redirecting to Login. ");
            setTimeout(() =>
              router.push("/login?redirect" + redirectParams)
              , 1500);
          });


        return <b>{res.message}</b>;
      },
      error: (err) => <b>{err.message}</b>,
    });
  };
  const googleLogin = async () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;

        formData.name = user.displayName;
        formData.email = user.email;
        formData.password = btoa(user.uid);
        toast.promise(googleCreateUserr(formData), {
          loading: "Creating Account...",
          success: (res) => {
            setTimeout(() => {
              router.push("/login");
            }, 2000);
            return <b>{res.message}</b>;
          },
          error: (err) => <b>{err.message}</b>,
        });
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };
  return (
    <>
      <div className="content  h-screen flex justify-center items-center w-screen  max-w-full mx-auto p-[1.75rem] sm:p-[0rem] ">
        <div className="flex flex-col justify-center items-center mx-auto  place-self-center max-h-screen">
          <div
            className="back-button text-base absolute top-2 cursor-pointer left-5 flex"
            onClick={handleBackButtonClick}
          >
            <div className="back-button flex gap-2 mbSmall:gap-3 items-center justify-center">
              <Image
                src="/images/back.png"
                height={20}
                width={20}
                className="h-3 w-3 mbSmall:h-4 mbSmall:w-4"
              />

              <div className=" text-xs mbSmall:text-base">Back</div>
            </div>
          </div>
          <div className="form-container  flex flex-col items-center justify-center gap-[0.3rem] mbSmall:gap-[0.5rem] h-auto w-full sm:w-full flex-grow-1 flex-shrink-0 ">
            <div className="header flex flex-col gap-2 w-full  text-start">
              <div className="font-extrabold text-xl sm:text-3xl">
                Create an Account
              </div>
              <div className="text-sm mbXSmall:text-base">
                Enter your details to create your account!
              </div>
            </div>
            {/* <div className="flex flex-col w-[60%]  items-center">
              <Image
                src="/images/Separator.png"
                height={500}
                width={800}
                alt="separator"
              />
            </div> */}

            <form
              className="flex flex-col  w-full gap-2"
              onSubmit={(e) => handleCreateUser(e)}
            >
              <label htmlFor="name" className="text-[#182467]">
                Name*
              </label>
              <input
                type="text"
                id="name"
                className="w-full h-10 border-2 rounded-lg px-4 focus:border-[#1F3DD9] outline-none"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
              <label htmlFor="email" className="text-[#182467]">
                Email*
              </label>
              <input
                type="email"
                id="email"
                className="w-full h-10 border-2 rounded-lg px-4 focus:border-[#1F3DD9] outline-none placeholder-gray-400"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
              <label htmlFor="password" className="text-[#182467]">
                Password*
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  className="w-full h-10 border-2 rounded-lg px-4 focus:border-[#1F3DD9] outline-none"
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
              <div className="flex items-center">
                <input type="checkbox" id="check" className="mr-2" />
                <label
                  htmlFor="check"
                  className="text-[#3A4264] mbMini:text-[0.55rem] mbXSmall:text-sm font-sans"
                >
                  I accept the{" "}
                  <a href="#" className="text-[#1F3DD9] ">
                    Terms and services
                  </a>{" "}
                  as well as{" "}
                  <a href="#" className="text-[#1F3DD9] ">
                    Privacy policy
                  </a>
                </label>
              </div>
              <div className="flex flex-col items-center justify-center gap-1 mbSmall:gap-3">
                <button className="bg-[#1F3DD9] text-white h-8 mbXSmall:h-10 w-full rounded-lg">
                  Sign Up
                </button>
                <div className="flex flex-row gap-2 w-[100%] sm:w-[100%] h-[1.75rem] sm:h-[100%] items-center">
                  <div className="separator w-[100%] h-[2px] bg-[#E0E5F2] my-4"></div>
                  <div className="text-gray-500 text-xs">or</div>
                  <div className="separator w-[100%] h-[2px] bg-[#E0E5F2] my-4"></div>
                </div>
                <div
                  className="google-signup cursor-pointer flex items-center justify-center bg-[#F4F5FA] w-[98%] sm:w-[100%] h-10 rounded-lg"
                  onClick={googleLogin}
                >
                  <div className="mr-2">
                    <Image
                      src="/images/Group.png"
                      height={20}
                      width={20}
                      alt="google"
                    />
                  </div>
                  <div className=" text-sm mbXSmall:text-base">
                    Sign in with Google
                  </div>
                </div>
                <div className=" w-full text-center text-sm mbXSmall:text-base">
                  Already have an account?{" "}
                  <a href="/login" className="text-[#1F3DD9] font-xs">
                    Login
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="image-container w-[45%] tbLandscape:w-[50%] h-full max-h-screen  hidden lg:block">
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
