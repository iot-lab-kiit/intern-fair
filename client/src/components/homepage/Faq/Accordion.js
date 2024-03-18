"use client";
import React, { useRef, useState } from "react";
import data from "../../../data/homepage/AccordionData.js";
import { GoPlus } from "react-icons/go";
import { AiOutlineMinus } from "react-icons/ai";

const AccordionItem = ({ question, answer, isOpen, onClick }) => {
  const contentRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");

  React.useEffect(() => {
    setMaxHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
  }, [isOpen]);

  return (
    <div className="border-b border-black">
      <button
  className={`w-full text-left py-5 px-2 flex items-center justify-between text-lg focus:outline-none ${
    isOpen
      ? "text-[#1F3DD9] bg-gradient-to-r from-transparent via-rgba(0,0,0,0.04) to-transparent"
      : "text-[#09123E]"
  } hover:bg-gradient-to-r from-transparent via-rgba(0,0,0,0.04) to-transparent`}
  onClick={onClick}
>
  <p className="mbXSmall:max-mbMedSmall:text-base mbMini:max-mbXSmall:text-sm max-mbMini:text-xs font-Gilroy-Medium">{question}</p>
  <span className="flex flex-shrink-0">  {isOpen ? (
      <AiOutlineMinus className="text-[#1F3DD9] text-2xl" />
    ) : (
      <GoPlus className="text-black text-2xl" />
    )}
  </span>
</button>

      <div
        ref={contentRef}
        className="overflow-hidden transition-max-height"
        style={{ maxHeight, transition: "max-height 0.3s ease-in-out" }}
      >
        <p className="pt-2 pb-5 text-[#09123E] mbXSmall:max-mbMedSmall:text-base mbMini:max-mbXSmall:text-sm max-mbMini:text-xs font-Gilroy-Light">{answer}</p>
      </div>
    </div>
  );
};

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="max-w-650 w-[75%] mx-auto mt-8">
      {data.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={activeIndex === index}
          onClick={() => handleItemClick(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
