import React from "react";
<<<<<<< HEAD

const TitleCard = ({ title }) => {
  return (
    <div className="bg-[#F4F5FA] w-fit h-fit p-3 flex justify-center items-center rounded-full pr-6 pl-6 ">
      {title}
=======
import Image from "next/image";
const TitleCard = ({ title, img }) => {
  return (
    <div className="bg-[#F4F5FA] w-fit h-fit p-3 flex gap-3 justify-center items-center rounded-full pr-4 pl-4 ">
      {title}
      <Image src={img} width={20} height={20} alt="arrow" />
>>>>>>> a7da9b0d3a23b0880b98b577843fed30d37c45b1
    </div>
  );
};

export default TitleCard;
