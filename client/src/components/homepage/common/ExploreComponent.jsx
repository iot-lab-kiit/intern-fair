import Image from "next/image";

const ExploreComponent = (buttonText, headingText, contentText) => {
    return (
        <div className=" w-screen max-w-full mbSmall:flex items-center justify-center gap-4 p-4">
            <div className="flex flex-col items-start justify-center mbSmall:gap-3 mbXSmall:gap-1 w-[70%] h-full mbMini:w-full ">
                <div className="">
                    <button className="p-2 px-4 text-lg mbMini:text-[0.6rem] mbMini:px-2 mbMini:p-1 mbMedium:text-base mbMedium:p-2 mbMedium:px-4 mbSmall:text-sm mbSmall:p-2 mbSmall:px-4 rounded-3xl font-medium bg-[#F4F5FA]">
                        {buttonText}
                    </button>
                </div>
                <h1 className="text-[#081245] font-Gilroy-Light text-3xl mbMini:text-base mbMini:mt-4 mbXSmall:text-xl mbSmall:text-2xl mbMedium:text-3xl laptop:text-3xl laptop:leading-8 tbPortrait:text-3xl tbLandscape:text-[2rem] font-black mb-2">
                    {headingText}
                </h1>
                <div className="w-[85%]  mbMini:w-[93vw] mbXSmall:w[100vw] mbSmall:w-[65vw] mbMedium:w-[53vw] laptop:w-[55vw] ">
                    <p className="text-[#09123E] font-Gilroy-Medium font-medium leading-6 mbMini:text-[0.65rem] mbSmall:text-sm mbSmall:leading-8 mbXSmall:leading-6 mbXSmall:text-[0.75rem] mbMini:leading-5 mbMini:my-3 mbMedium:text-[0.9rem] mbMedium:leading-7 laptop:text-[1.1rem] laptop:leading-8 tbPortrait:text-[1.2rem] tbLandscape:text-[1.2rem] ">
                        {contentText}
                    </p>
                </div>
            </div>
            <div className="mt-6 w-[30%] mbMini:w-full mbMini:mt-8 h-full flex items-center mbMini:justify-start mbSmall:justify-end justify-end">
                <button className="flex items-center justify-center gap-4 font-Gilroy-Medium rounded-2xl mbMini:px-3 mbMini:p-1 mbXSmall:p-2 mbXSmall:px-3 mbXSmall:py-2 mbMedium:p-4 mbMedium:px-6 mbMedium:text-base mbSmall:p-4 mbSmall:px-8 tbLandscape:p-3 tbLandscape:px-7 border-2 border-black mbSmall:text-xs mbMini:text-[0.7rem]">
                    Explore all
                    <span>
                        <Image className="tbPortrait:w-[1vw] mbSmall:w-[1.4vw] mbMini:w-[2vw]" src="/icons/Vector_black.png" alt="Description of your image" width={15} height={20} />
                    </span>
                </button>
            </div>
        </div>
    );
};

export default ExploreComponent;
