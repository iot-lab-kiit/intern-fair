import Carousel from "@/components/ui/Carousel/Carousel";
import TitleCard from "@/components/ui/TitleCard";
import Image from "next/image";

const About = ({ align1, data }) => {
  return (
    <div className="w-full py-16 bg-white" id="about">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col tbPortrait:flex-row gap-12 items-start">
          <div className="w-full tbPortrait:w-3/3">
            <div className="relative aspect-video w-full overflow-hidden rounded-xl">
              <Carousel
                data={data.carousel1}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="w-full tbPortrait:w-1/3">
            <TitleCard title={data.about.title} img="/icons/us.png" />
          </div>
        </div>

        <div className="mt-12 flex flex-col md:flex-row justify-between gap-12">
          <div className="w-full md:w-1/2">
            <p className="text-base text-gray-900 leading-relaxed">
              {data.about.description}
            </p>
          </div>

          <div className="hidden md:block w-full md:w-1/2">
            <div className="relative aspect-video overflow-hidden rounded-xl">
              <Image
                src="/images/fixedAbout.jpg"
                alt="about"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
