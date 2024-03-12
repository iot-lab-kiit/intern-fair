import React from "react";
import Image from "next/image";

const Mission = () => {
  const videoId = "vCOSTG10Y4o";

  return (
    <div className="container bg-[#081245] min-h-fit text-white max-w-full px-8 flex flex-col justify-center items-center ">
      <div className="mission flex flex-col leading-64 max-w-[120rem] gap-20 mx-[0.25rem] sm:mx-14 md:mx-16 lg:mx-20 my-24 py-10">
        <div className="top flex mt-[-5rem] sm:mt-[-3rem] md:mt-[-1rem]">
          <div className="head flex bg-[#4E5680] items-center justify-center w-25 sm:w-40 rounded-3xl relative">
            <div className="our-vision gap-1 sm:gap-2 text-xs sm:text-base flex flex-row m-1 p-2 items-center justify-center">
              <div>Our Vision</div>
              <div className="target w-[0.75rem] sm:w-[1rem] h-[0.75rem] sm:h-[1rem] relative inline-block mt-[-0.15rem] sm:mt-[-0.25rem] ">
                <Image
                  src="/images/target.png"
                  className="align-centre"
                  alt="Target Icon"
                  fill
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="content  font-sans text-2xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl"
          style={{ marginTop: "-2rem", marginBottom: "-1rem" }}
        >
          <span className="font-medium">Empowering students</span>

          <Image
            className="inline-block mx-1.5 sm:mx-3.5 w-8 sm:w-[3rem] md:w-[4rem] lg:w-[5rem]"
            src="/images/image 32.png"
            alt="Image 32"
            width={80}
            height={80}
          />

          <span className="font-light leading-normal">
            with new ideas and support. Working towards making things better for
            everyone. Inspiring students to turn problems into opportunities for
            a brighter future.
          </span>
          <Image
            className="inline-block mx-1 sm:mx-3 w-8 sm:w-[3rem] md:w-[4rem] lg:w-[5rem]"
            src="/images/image 34.png"
            alt="Image 34"
            width={80}
            height={80}
          />
        </div>
        <div
          className="video-container relative  w-full grid place-items-center m-auto mb-[-5rem] sm:mb-[-8rem] md:mb-[-10rem] "
          style={{ paddingTop: "56.25%" }}
        >
          <iframe
            className="video absolute top-0 w-full sm:w-4/6 h-full sm:h-4/6 2xl:w-[75rem]"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Mission;
