import Image from "next/image";

const ExploreComponent = (buttonText, headingText, contentText) => {
  return (
    <div className=" w-screen max-w-full mbSmall:flex items-center justify-center gap-4 p-4">
      <div className="flex flex-col items-start justify-center mbSmall:gap-3 mbXSmall:gap-3 w-[70%] h-full mbMini:w-full mbMini:gap-2 ">
        <div className="">
          <button className="p-2 px-4 text-lg mbMini:text-[0.7rem] mbMini:px-3 mbMini:p-1 mbXSmall:text-sm mbXSmall:px-3 mbXSmall:p-2 mbMedium:text-base mbMedium:p-2 mbMedium:px-4 mbSmall:text-sm mbSmall:p-2 mbSmall:px-4 rounded-3xl font-medium bg-[#F4F5FA]">
            Courses for you 🤝
          </button>
        </div>
        <h1 className="text-[#081245] font-Gilroy-Light text-3xl mbMini:text-base  mbXSmall:text-xl mbSmall:text-2xl  mbMedium:text-[1.7rem] mbMedium:leading-7  laptop:text-[1.83rem] laptop:leading-8 tbPortrait:text-3xl tbLandscape:text-4xl font-black">
          Tailored Courses for Your Success
        </h1>
        <div className="w-[85%]  mbMini:w-[93vw] mbXSmall:w[100vw] mbSmall:w-[65vw] mbMedium:w-[53vw] laptop:w-[60vw] ">
          <p className="text-[#09123E] font-Gilroy-Medium font-medium leading-6 mbMini:text-[0.8rem] mbMini:leading-5 mbSmall:text-sm mbSmall:leading-5 mbXSmall:text-[0.8rem]  mbMedium:text-[0.9rem] mbMedium:leading-6 laptop:text-[1.1rem]  laptop:leading-7 tbPortrait:text-[1.2rem] tbLandscape:text-2xl">
            Explore our comprehensive selection of courses tailored to meet your
            academic and career aspirants. From foundational subjects to
            advanced specialties, we offer a diverse range of courses designed
            to equip you with the knowledge and skills
          </p>
        </div>
      </div>
      <div className="w-[30%] mbMini:w-full mbMini:mt-4 h-full flex items-center  mbMini:justify-start mbSmall:justify-end justify-end">
        <button className=" flex items-center justify-center gap-2 font-Gilroy-Medium rounded-2xl mbMini:px-3 mbMini:p-[0.25rem] mbXSmall:p-2 mbXSmall:px-3 mbMedium:p-2 mbMedium:px-4 mbMedium:text-base mbSmall:p-2 mbSmall:px-4 tbLandscape:p-3 tbLandscape:px-7 border-2 border-black mbSmall:text-xs mbMini:text-[0.7rem]">
          Explore all
          <span>
            <Image
              className="tbPortrait:w-[1vw] mbSmall:w-[1.4vw] mbMini:w-[2vw]"
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

export default ExploreComponent;
