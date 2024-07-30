"use client";
import { createSuggestion } from "@/actions/suggestion";
import Image from "next/image";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const Suggestion = () => {

  const [isFormValid,setIsFormValid]=useState(false)
  const [formDetails, setFormDetails] = useState({
    name: "",
    email: "",
    suggestion: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormDetails({
      ...formDetails,
      [name]: value,
    });
  };

  useEffect(() => {
    validateForm();
  }, [formDetails]);

  const validateForm = () => {
    const isNameValid = formDetails.name.trim() !== "";
    const isEmailValid = /\S+@\S+\.\S+/.test(formDetails.email);
    const isSuggestionValid = formDetails.suggestion.trim() !== "";
    setIsFormValid(isNameValid && isEmailValid && isSuggestionValid);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    validateForm();
    if (!isFormValid) {
      if (!formDetails.name) {
        toast.error("Name is required");
        return;
      }
      if (!formDetails.email) {
        toast.error("Email is required");
        return;
      } else if (!/\S+@\S+\.\S+/.test(formDetails.email)) {
        toast.error("Invalid email");
        return;
      }
      if (!formDetails.suggestion) {
        toast.error("Suggestion is required");
        return;
      }
    }
    toast.promise(createSuggestion(formDetails), {
      loading: "Creating Suggestion...",
      success: (res) => {
        return <b>{res.message}</b>;
      },
      error: (err) => <b>{err.message}</b>,
    });
    // Handle form submission logic here
    console.log(formDetails);
    // Optionally, reset form after submission
    setFormDetails({
      name: "",
      email: "",
      suggestion: "",
    });
  };

  return (
    <div  id="suggestion" className="w-screen max-w-full bg-[#081245] mbMedium:flex items-start justify-center mbXSmall:gap-1 gap-6 mbXSmall:p-0 mbSmall:p-6 mbMedium:p-12">
      <div className="flex flex-col items-start mbMini:justify-center mbXSmall:justify-center mbSmall:justify-center mbMedium:justify-start mbMini:w-full mbMini:gap-3 mbXSmall:gap-2 mbMini:h-[30%] mbSmall:h-[30%] mbMedium:h-full mbSmall:gap-2 mbSmall:w-full mbMedium:gap-2 mbMedium:w-[60%] laptop:gap-4 w-1/2 laptop:w-1/2 mbXSmall:px-8 p-5">
        <button className="p-2 px-4 font-Gilroy-Medium text-white text-lg mbMini:text-[0.6rem] mbMini:px-3 mbMini:p-[0.15rem] mbXSmall:text-[0.65rem] mbXSmall:p-1 mbXSmall:px-3 mbMedSmall:p-[0.35rem] mbMedSmall:px-4 mbSmall:text-xs mbSmall:p-2 mbSmall:px-3 mbMedium:text-sm mbMedium:p-2 mbMedium:px-4 rounded-3xl font-medium bg-[#4E5680]">
          Suggestion ✍️
        </button>

        <h1 className="text-[#EFF1F8] font-Gilroy-Light mbMini:text-[1.2rem] mbMini:leading-4 mbXSmall:text-[1.58rem] mbXSmall:leading-8 mbMedSmall:text-3xl mbSmall:text-[2rem] mbSmall:leading-8 mbMedium:text-[1.44rem] mbMedium:leading-7 laptop:text-[1.9rem] laptop:leading-7 tbPortrait:text-[2.2rem] tbPortrait:leading-8 tbLandscape:text-[2.6rem] font-black">
          We Value Your Feedback!
        </h1>
        <div className="w-[85%] mbMini:w-full mbXSmall:w[100vw] mbSmall:w-full mbMedium:w-[35vw] laptop:w-[37vw]">
          <p className="text-[#EFF1F8] font-Gilroy-Medium font-normal leading-6 mbMini:text-[0.68rem] mbMini:leading-4 mbXSmall:text-[0.82rem] mbXSmall:leading-4 mbMedSmall:text-sm mbSmall:text-[0.85rem] mbMedium:text-[0.9rem] laptop:text-[1rem] laptop:leading-5 tbPortrait:text-[1.15rem] tbPortrait:leading-6 tbLandscape:text-[1.3rem] tbLandscape:leading-7">
            We appreciate you taking the time to share your thoughts, ideas, and
            suggestions with us. Whether it's about enhancing our services,
            facilities, or anything else related to your experience, your input
            is invaluable. Let's work together to make our college even better!
          </p>
        </div>
      </div>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="mbXSmall:w-full mbSmall:w-full mbMini:h-[70%] mbMedium:h-full flex flex-col items-start justify-start gap-5 mbXSmall:px-6 p-6"
      >
        <input
          type="text"
          name="name"
          placeholder="Name*"
          value={formDetails.name}
          onChange={handleChange}
          className="border-[#AAAFCB] bg-transparent border text-white font-Gilroy-Medium w-[90%] mbMini:h-[4vh] mbXSmall:h-[5vh] mbSmall:h-[5.5vh] mbMedium:h-[6vh] laptop:h-[7vh] p-4 rounded-lg resize-none"
        />
        <input
          type="email"
          name="email"
          placeholder="Email*"
          value={formDetails.email}
          onChange={handleChange}
          className="border-[#AAAFCB] bg-transparent border text-white font-Gilroy-Medium w-[90%] mbMini:h-[4vh] mbXSmall:h-[5vh] mbSmall:h-[5.5vh] mbMedium:h-[6vh] laptop:h-[7vh] p-4 rounded-lg"
        />
        <textarea
          name="suggestion"
          cols="53"
          rows="8"
          placeholder="Suggestion*"
          value={formDetails.suggestion}
          onChange={handleChange}
          className="border-[#AAAFCB] bg-transparent border text-white font-Gilroy-Medium p-4 rounded-lg resize-none appearance-none w-[90%]"
        ></textarea>
        <button
          type="submit"
          className="bg-[#F9F9FC] p-2 mbMini:text-[0.7rem] mbXSmall:text-xs mbSmall:text-sm mbMedium:text-base text-[#081245] mbMini:px-4 mbXSmall:px-4 mbSmall:px-6 mbMedium:px-11 flex items-center justify-center gap-2 font-Gilroy-Medium rounded-lg"
        >
          Submit
          <span>
            <Image
              className="tbPortrait:w-[0.9vw] mbSmall:w-[1.4vw] mbMini:w-[2vw] rotate-[49deg]"
              src="/icons/Vector_black.png"
              alt="Description of your image"
              width={15}
              height={20}
            />
          </span>
        </button>
      </form>
    </div>
  );
};

export default Suggestion;
