import React from "react";
import Image from "next/image";
const TitleCard = ({ title,img }) => {
  console.log(img);
  return (
    <div className="bg-[#F4F5FA] w-fit h-fit p-3 flex gap-3 justify-center items-center rounded-full pr-4 pl-4 ">
      {title}
      <Image src={img} width={20} height={20} alt="arrow" />
    </div>
  );
};

export default TitleCard;
