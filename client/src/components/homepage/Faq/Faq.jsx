import Accordion from "./Accordion";

const Faq = () => {
  return (
    <div className="w-screen mx-auto max-w-full mbSmall:flex items-center justify-center gap-4 p-4">
      <div className="flex flex-col items-center justify-center gap-4 w-[75%] h-full mbMini:w-full ">
        <div className="">
          <button className=" text-primary p-2 px-4 text-lg mbMini:text-sm mbMini:px-2 mbMini:p-1 mbMedium:text-base mbMedium:p-2 mbMedium:px-4 mbSmall:text-base rounded-3xl font-medium bg-[#F4F5FA]">
            Top 05 FAQ’s 👌
          </button>
        </div>
        <h1 className="text-primary font-Gilroy-Bold tbLandscape:text-4xl mbSmall:text-2xl mbMini:text-xl laptop:text-3xl font-black">
          Helpful Answers
        </h1>
        <div className="w-[85%] mbMini:w-[85vw] mbMini:max-mbXSmall:w-[70vw] mbSmall:w-[65vw] mbMedium:w-[53vw] laptop:w-[60vw]">
          <p className="text-primary font-Gilroy-Medium font-medium tbLandscape:text-xl mbMedium:text-base mbSmall:text-base tbPortrait:text-lg max-mbXSmall:text-sm">
            Where we address common queries about our college and its offerings.
            Below, you'll find answers to the most frequently asked questions
            about admissions, programs, financial aid, campus life, and more. If
            you can't find the information you're looking for, feel free to
            contact us for further assistance.
          </p>
        </div>
        <div className="mt-4">
          <Accordion />
        </div>
      </div>
    </div>
  );
};

export default Faq;
