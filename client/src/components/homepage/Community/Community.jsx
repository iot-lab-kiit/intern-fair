import Image from "next/image";

const Community = () => {
  return (
    <div className="w-full mbMedium:h-[50vh] laptop:h-[60vh] tbPortrait:h-[70vh]  tbLandscape:h-[75vh] flex flex-col mbMedium:flex-row items-center justify-evenly gap-3 mbSmall:gap-7 mbMedium:gap-5 p-8">
      <div className="w-full mbMedium:w-[45%] flex flex-col gap-6 mbSmall:gap-10">
        <div className="flex flex-col items-start justify-center mbSmall:gap-3 mbXSmall:gap-3 w-[70%] h-full mbMini:w-full mbMini:gap-2 ">
          <div className="">
            <button className="p-2 px-4 text-lg mbMini:text-[0.7rem] mbMini:px-3 mbMini:p-1 mbXSmall:text-sm mbXSmall:px-3 mbXSmall:p-2 mbMedium:text-base mbMedium:p-2 mbMedium:px-4 mbSmall:text-sm mbSmall:p-2 mbSmall:px-4 rounded-3xl font-medium bg-[#F4F5FA]">
              Our community 🫂
            </button>
          </div>
          <h1 className="text-[#081245] font-Gilroy-Light text-3xl mbMini:text-lg  mbXSmall:text-xl  mbMedSmall:text-2xl mbSmall:text-3xl  mbMedium:text-[1.8rem] mbMedium:leading-8  laptop:text-3xl tbPortrait:text-4xl tbLandscape:text-5xl font-black">
            Discover Our Community
          </h1>
          <div className="w-full">
            <p className="text-[#09123E] font-Gilroy-Medium font-medium leading-6 mbMini:text-[0.74rem] mbMini:leading-5 mbXSmall:text-[0.8rem]  mbMedSmall:text-base mbSmall:text-lg mbSmall:leading-7  mbMedium:text-[0.9rem] mbMedium:leading-6 laptop:text-[1.1rem]  laptop:leading-7 tbPortrait:text-[1.1rem] tbLandscape:text-[1.3rem] tbLandscape:leading-8 ">
              In our community , members share , discuss and solve problems
              together. Join the conversation to find solutions, exchange ideas
              , and connect with others who share your interests and goals
            </p>
          </div>
        </div>
        <div className="">
          <button className=" flex items-center justify-center gap-2 font-Gilroy-Medium rounded-xl mbMini:px-3 mbMini:p-[0.5rem] mbXSmall:p-2 mbXSmall:px-3  mbMedSmall:p-3  mbMedSmall:px-4 mbSmall:p-3 mbSmall:px-5 mbMedium:p-3 mbMedium:px-5 tbPortrait:p-3 tbPortrait:px-8 tbLandscape:p-3 tbLandscape:px-7 border-2 border-black mbMini:text-[0.75rem] mbMedSmall:text-xs mbSmall:text-sm mbMedium:text-base tbPortrait:text-lg">
            Explore community
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
      <div className="hidden mbMedium:flex  mbMini:w-[100%] mbSmall:w-[70%] mbMedium:w-[30%] h-1/2  mbMedium:h-full items-center justify-center gap-2 relative">
        <div className="h-[80%] w-full flex self-start relative overflow-hidden">
          <Image
            src="/images/comm_frame1.svg"
            alt="Description of your image"
            fill={true}
            objectFit="contain"
          />
        </div>
        <div className="h-[80%] w-full flex self-end relative overflow-hidden">
          <Image
            src="/images/comm_frame2.svg"
            alt="Description of your image"
            fill={true}
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Community;
