import React from "react";

const TitleCard = ({ title }) => {
  return (
    <div className="bg-[#F4F5FA] w-fit h-fit p-3 flex justify-center items-center rounded-full pr-6 pl-6 ">
      {title}
    </div>
  );
};

export default TitleCard;
