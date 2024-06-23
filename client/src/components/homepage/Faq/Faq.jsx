import Accordion from "./Accordion";

const Faq = () => {
  return (
    <div
      className="w-screen mx-auto max-w-full flex flex-col items-center justify-center gap-4 p-4 pb-16 "
      id="faq"
    >
      <div className="flex flex-col items-center justify-center gap-4 w-[75%] h-full mbMini:w-full ">
        <div className="">
          <button className=" text-[#09123E] p-2 px-4 text-lg mbMini:text-sm mbMini:px-2 mbMini:p-1 mbMedium:text-base mbMedium:p-2 mbMedium:px-4 mbSmall:text-base rounded-3xl font-medium bg-[#F4F5FA]">
            Top 05 FAQ’s 👌
          </button>
        </div>
        <h1 className="text-[#09123E] font-Gilroy-Bold tbLandscape:text-4xl mbSmall:text-2xl mbMini:text-xl laptop:text-3xl font-black">
          Curious Corner
        </h1>
        <div className="w-[85%] mbMini:w-[85vw] mbMini:max-mbXSmall:w-[70vw] mbSmall:w-[65vw] mbMedium:w-[53vw] laptop:w-[60vw]">
          <p className="text-[#09123E] font-Gilroy-Medium font-medium  max-mbXSmall:text-sm text-center">
            Our dedicated lab members have compiled this comprehensive FAQ to
            help you delve into various technical domains. Here, you'll find
            valuable insights and guidance from experts in their fields. Whether
            you're a complete newcomer or looking to expand your knowledge,
            these FAQs provide the information you need to navigate your chosen
            domain. Explore common questions, gain practical advice, and embark
            on a successful journey of learning and exploration!
          </p>
        </div>
        <div className="mt-4 ">
          <Accordion />
        </div>
      </div>
    </div>
  );
};

export default Faq;
