import TeamCard from "@/components/TeamsPage/TeamCard/TeamCard";
import { people } from "@/data/TeamsPage/PeopleData";

const page = () => {
  return (
    <div className="w-screen max-w-full flex flex-col items-center justify-center gap-10 p-3 mbXSmall:p-5 mbSmall:p-8">
      <div className="flex flex-col items-center justify-center gap-3 mbXSmall:gap-4 w-full mbMedium:w-[85%] laptop:w-[70%]">
        <button className="text-[#09123E] p-1 px-2 text-sm  mbMedium:text-base mbXSmall:p-2 mbXSmall:px-4 mbSmall:text-base rounded-3xl bg-[#F4F5FA]">
          Team that empowers you 💪
        </button>
        <h1 className="text-[#081245] text-xs mbXSmall:text-base mbSmall:text-xl mbMedium:text-2xl tbPortrait:text-3xl tbLandscape:text-4xl font-extrabold">
          Meet Our Dedicated Team Behind the solutions
        </h1>
        <p className="text-[0.55rem] mbXSmall:text-xs mbSmall:text-sm mbMedium:text-base tbPortrait:text-lg tbLandscape:text-xl text-[#09123E] text-center">
          Discover the talented team responsible for creating the solutions that
          make a difference. Each member brings unique skills and passion to
          ensure we address your needs effectively. Get to know the people
          behind our success. Without these people this website couldn’t be
          possible.
        </p>
      </div>
      <div className="flex items-center justify-center gap-8 tbLandscape:gap-10 flex-wrap w-full">
        {people.map((person, index) => (
          <TeamCard key={index} person={person} />
        ))}
      </div>
    </div>
  );
};

export default page;
