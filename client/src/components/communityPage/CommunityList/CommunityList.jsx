import "./style.css";
import CommunityCard from "./CommunityCard";
const CommunityList = () => {
  return (
    <div className="w-[40%] p-6 border-[1.5px] border-[#DCDCE7] rounded-lg font-Gilroy-Medium flex flex-col items-start justify-center gap-6">
      <div className="flex items-center justify-between w-full">
        <h1 className="text-[0.9rem] laptop:text-lg tbLandscape:text-xl ">
          Explore famous communities
        </h1>
        <p className="text-[#2A5885] text-[0.8rem] laptop:text-base tbLandscape:text-lg hover:underline cursor-pointer">
          See all
        </p>
      </div>
      <div className="flex items-start gap-3 w-full overflow-x-auto scroller relative whitespace-nowrap">
        <CommunityCard />
        <CommunityCard />
        <CommunityCard />
        <CommunityCard />
      </div>
    </div>
  );
};

export default CommunityList;
