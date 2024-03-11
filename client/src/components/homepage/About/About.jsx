import Carousel from "@/components/ui/Carousel/Carousel";
import TitleCard from "@/components/ui/TitleCard";
import Image from "next/image";
const About = ({ align1, data }) => {
  return (
    <div className="flex items-center justify-center pb-10  overflow-hidden">
      <div className="content flex flex-col mx-10 xl:ml-80 md:items-start xl:max-w-[120rem] lg: px-8">
        <div
          className={`flex items-center flex-col gap-10 justify-center tbPortrait:flex-row md:items-start max-h-[20rem] sm:max-h-none`}
        >
         
            <Carousel data={data.carousel1} />
          
          <TitleCard title={data.about.title} img="/icons/us.png" />
        </div>
        <div
          className={`flex flex-row justify-center xl:gap-[16rem] lg-[11rem] md:gap-4 mt-5 max-h-[12rem]`}
        >
          <div className="w-full text-center md:text-left xl:w-[30rem] text-sm ">
            {data.about.description}
          </div>
          <div className="w-[40rem] h-[50rem] relative tbPortrait:bottom-[100px]  bottom-[200px] z-20 hidden md:block">
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
