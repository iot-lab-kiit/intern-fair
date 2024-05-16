import Carousel from "@/components/ui/Carousel";
import TitleCard from "@/components/ui/TitleCard";
import Image from "next/image";
const About = ({ align1, data }) => {
  return (
    <div className=" flex items-center justify-center  overflow-hidden ">
      <div className="content flex flex-col mx-10 xl:ml-40 lg:items-start xl:max-w-[120rem] lg: px-8">
        <div
          className={`flex items-center flex-col gap-10 justify-center md:flex-row md:items-start `}
        >
          <div>
            <Carousel data={data.carousel1} />
          </div>
          <TitleCard title={data.about.title} />
        </div>
        <div
          className={`flex flex-row justify-center xl:gap-[16rem] lg-[11rem] md:gap-4 mt-10 max-h-[12rem]`}
        >
          <div className="w-full text-center md:text-left xl:w-[30rem] text-sm ">
            {data.about.description}
          </div>
          <div className="w-[40rem] h-[50rem] relative bottom-[100px] z-20 hidden md:block">
            <Image
              src="/images/fixedAbout.png"
              width={400}
              height={500}
              alt="about"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
