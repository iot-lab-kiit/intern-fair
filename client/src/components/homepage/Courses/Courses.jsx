import Image from "next/image";
import EmblaCarousel from "./EmblaCarousel";
// import '../Courses/embla.css';
const OPTIONS = { dragFree: true }
const Courses = () => {
  return (
    <div className="w-screen max-w-full  flex flex-col items-center justify-center gap-6  mbMedium:px-16 mbSmall:px-5 mbMini:px-0 ">
      <div className=" w-screen max-w-full mbSmall:flex items-center justify-center gap-4 p-4">
        <div className="flex flex-col items-start justify-center gap-3 w-[70%] h-full mbMini:w-full ">
          <div className="">
            <button className="p-2 px-4 text-lg mbMedium:text-base mbSmall:text-xs mbMini:text-[0.7rem] rounded-3xl font-medium bg-[#F4F5FA]">
              Courses for you 🤝
            </button>
          </div>
          <h1 className="text-[#081245] font-Gilroy-Light text-3xl mbMedium:text-[1.3rem] mbSmall:text-[1.1rem] mbMini:text-base font-black">
            Tailored Courses for Your Success
          </h1>
          <div className="w-[85%] mbMedium:w-[90%] mbMini:w-full">
            <p className="text-[#09123E] font-Gilroy-Medium font-medium leading-6 mbMedium:text-base mbSmall:text-sm mbMini:text-xs ">
              Explore our comprehensive selection of courses tailored to meet
              your academic and career aspirants. From foundational subjects to
              advanced specialties, we offer a diverse range of courses designed
              to equip you with the knowledge and skills
            </p>
          </div>
        </div>
        <div className="w-[30%] mbMini:w-full mbMini:mt-4 h-full flex items-center justify-center">
          <button className=" flex items-center justify-center gap-2 font-Gilroy-Medium rounded-2xl mbMini:px-5 mbMini:p-[0.4rem] mbMedium:p-2 mbMedium:px-7 mbMedium:text-base mbSmall:p-1 mbSmall:px-4 border-2 border-black mbSmall:text-xs mbMini:text-[0.7rem]">
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
