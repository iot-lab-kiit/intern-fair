import Image from "next/image";
const Suggestion = () => {
  // mbXSmall:min-h-[50vh]  mbSmall:h-[50vh] tbPortrait:min-h-[60vh]
  // mbMedium:h-[75vh] laptop:h-[60vh] tbPortrait:
  return (
    <div className=" w-screen max-w-full bg-[#081245] mbMedium:flex items-start justify-center mbXSmall:gap-1 gap-6 mbXSmall:p-0 mbSmall:p-6  mbMedium:p-12">
      <div className="flex flex-col  items-start mbMini:justify-center mbXSmall:justify-center mbSmall:justify-center  mbMedium:justify-start mbMini:w-full mbMini:gap-3 mbXSmall:gap-2  mbMini:h-[30%] mbSmall:h-[30%] mbMedium:h-full mbSmall:gap-2  mbSmall:w-full  mbMedium:gap-2 mbMedium:w-[60%] laptop:gap-4 w-1/2  laptop:w-1/2 mbXSmall:px-8  p-5">
        <button className="p-2 px-4 font-Gilroy-Medium  text-white text-lg mbMini:text-[0.6rem] mbMini:px-3 mbMini:p-[0.15rem] mbXSmall:text-[0.65rem] mbXSmall:p-1 mbXSmall:px-3 mbMedSmall:p-[0.35rem] mbMedSmall:px-4 mbSmall:text-xs mbSmall:p-2 mbSmall:px-3 mbMedium:text-sm mbMedium:p-2 mbMedium:px-4 rounded-3xl font-medium bg-[#4E5680]">
          Suggestion ✍️
        </button>

        <h1 className="text-[#EFF1F8] font-Gilroy-Light mbMini:text-[1.2rem] mbMini:leading-4 mbXSmall:text-[1.58rem] mbXSmall:leading-8 mbMedSmall:text-3xl mbSmall:text-[2rem] mbSmall:leading-8 mbMedium:text-[1.44rem] mbMedium:leading-7 laptop:text-[1.9rem] laptop:leading-7 tbPortrait:text-[2.2rem] tbPortrait:leading-8 tbLandscape:text-[2.6rem] font-black">
          Your opinion matters to us!
        </h1>
        <div className="w-[85%]  mbMini:w-full mbXSmall:w[100vw] mbSmall:w-full mbMedium:w-[35vw] laptop:w-[37vw] ">
          <p className="text-[#EFF1F8] font-Gilroy-Medium font-normal leading-6 mbMini:text-[0.68rem] mbMini:leading-5  mbXSmall:text-[0.82rem] mbXSmall:leading-5 mbMedSmall:text-sm mbSmall:text-[0.85rem] mbSmall:leading-6 mbMedium:text-[0.9rem] mbMedium:leading-6 laptop:text-[1rem] laptop:leading-7  tbPortrait:text-[1.15rem] tbPortrait:leading-8 tbLandscape:text-[1.3rem]">
            Use the suggestion box below to share your thoughts, ideas, or
            suggestions. Whether it's about improving our services, facilities,
            or anything else related to your experience, we're all ears.
            Together, let's make our college even better!
          </p>
        </div>
      </div>
      <div className=" mbXSmall:w-full mbSmall:w-full mbMini:h-[70%]  mbMedium:h-full flex flex-col items-start justify-start gap-5 mbXSmall:px-6 p-6">
        <input
          type="text"
          placeholder="Name*"
          className="border-[#AAAFCB] bg-transparent border text-white font-Gilroy-Medium w-[90%] mbMini:h-[4vh] mbXSmall:h-[5vh] mbSmall:h-[5.5vh] mbMedium:h-[6vh] laptop:h-[7vh] p-4 rounded-lg resize-none "
        />
        <input
          type="email"
          placeholder="Email*"
          className="border-[#AAAFCB] bg-transparent border text-white font-Gilroy-Medium w-[90%] mbMini:h-[4vh] mbXSmall:h-[5vh] mbSmall:h-[5.5vh] mbMedium:h-[6vh] laptop:h-[7vh]  p-4 rounded-lg"
        />
        <textarea
          name=""
          id=""
          cols="53"
          rows="8"
          placeholder="Suggestion*"
          className="border-[#AAAFCB] bg-transparent border text-white font-Gilroy-Medium p-4 rounded-lg resize-none appearance-none w-[90%]"
        ></textarea>
        <button className="bg-[#F9F9FC] p-2 mbMini:text-[0.7rem] mbXSmall:text-xs mbSmall:text-sm mbMedium:text-base text-[#081245] mbMini:px-4 mbXSmall:px-4 mbSmall:px-6 mbMedium:px-11 flex items-center justify-center gap-2 font-Gilroy-Medium rounded-lg">
          Submit
          <span>
            <Image
              className="tbPortrait:w-[0.9vw] mbSmall:w-[1.4vw] mbMini:w-[2vw]  rotate-[49deg]"
              src="/icons/Vector_black.png"
              alt="Description of your image"
              width={15}
              height={20}
            />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Suggestion;
