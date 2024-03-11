import Image from "next/image";
import EmblaCarousel from "./EmblaCarousel";
// import '../Courses/embla.css';
const OPTIONS = { dragFree: true };
const Courses = () => {
  return (
    <div className="w-screen max-w-full  flex flex-col items-center justify-center gap-6 mbMini:gap-[0.3rem]  mbMedium:px-16 mbSmall:px-5 mbMini:px-0 ">
      <div className=" w-screen max-w-full mbSmall:flex items-center justify-center gap-4 p-4">
        <div className="flex flex-col items-start justify-center mbSmall:gap-3 mbXSmall:gap-1 w-[70%] h-full mbMini:w-full ">
          <div className="">
            <button className="p-2 px-4 text-lg mbMini:text-[0.6rem] mbMini:px-2 mbMini:p-1 mbMedium:text-base mbMedium:p-2 mbMedium:px-4 mbSmall:text-xs rounded-3xl font-medium bg-[#F4F5FA]">
              Courses for you 🤝
            </button>
          </div>
          <h1 className="text-[#081245] font-Gilroy-Light text-3xl  tbLandscape:text-[2rem] mbSmall:text-[1rem]  mbMini:text-xs laptop:text-2xl font-black">
            Tailored Courses for Your Success
          </h1>
          <div className="w-[85%]  mbMini:w-[93vw] mbXSmall:w[100vw] mbSmall:w-[65vw] mbMedium:w-[53vw] laptop:w-[60vw] ">
            <p className="text-[#09123E] font-Gilroy-Medium font-medium leading-6 tbLandscape:text-[1.2rem] mbMini:text-[0.5rem] mbMedium:text-sm mbSmall:text-xs mbXSmall:text-[0.6rem] mbMini:leading-3 laptop:text-[0.9rem] tbPortrait:text-[1.2rem]">
              Explore our comprehensive selection of courses tailored to meet
              your academic and career aspirants. From foundational subjects to
              advanced specialties, we offer a diverse range of courses designed
              to equip you with the knowledge and skills
            </p>
          </div>
        </div>
        <div className="w-[30%] mbMini:w-full mbMini:mt-4 h-full flex items-center  mbMini:justify-start mbSmall:justify-end justify-end">
          <button className=" flex items-center justify-center gap-2 font-Gilroy-Medium rounded-2xl mbMini:px-3 mbMini:p-[0.25rem] mbMedium:p-2 mbMedium:px-4 mbMedium:text-base mbSmall:p-2 mbSmall:px-4 tbLandscape:p-3 tbLandscape:px-7 border-2 border-black mbSmall:text-xs mbMini:text-[0.7rem]">
            Explore all
            <span>
              <Image
                className="tbPortrait:w-[1vw] mbSmall:w-[1.4vw] mbMini:w-[2vw]"
                src="/icons/Vector.svg"
                alt="Description of your image"
                width={15}
                height={20}
              />
            </span>
          </button>
        </div>
      </div>
      <EmblaCarousel options={OPTIONS} />
    </div>
  );
};

export default Courses;
