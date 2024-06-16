import TeamCard from "@/components/TeamsPage/TeamCard/TeamCard";

const page = () => {
  const people = [
    {
      name: "Jatin Chaudhary",
      img: "/images/jatin.jpg",
      githubUrl: "https://github.com/JATIN0926/",
      linkedinUrl:
        "https://www.linkedin.com/in/jatin-chaudhary-771a70189?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "Akangkha Sarkar",
      img: "/images/akangkha.jpg",
      githubUrl: "https://github.com/Akangkha",
      linkedinUrl:
        "https://www.linkedin.com/in/akangkha-sarkar-4a6b48214?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "Maanas Sehgal",
      img: "/images/maanas.jpg",
      githubUrl: "https://github.com/MaanasSehgal",
      linkedinUrl: "https://www.linkedin.com/in/maanassehgal",
    },
    {
      name: "Vidhi Singhal",
      img: "/images/vidhi.jpg",
      githubUrl: "https://github.com/Vidhi425",
      linkedinUrl: "https://www.linkedin.com/in/vidhi-singhal-a27a44287",
    },
    {
      name: "Kumar Priyanshu",
      img: "/images/priyanshu.jpeg",
      githubUrl: "https://github.com/kpriyanshu2003",
      linkedinUrl: "https://www.linkedin.com/in/kpriyanshu2003/",
    },
    {
      name: "Aryan Krishna",
      img: "/images/aryan.jpg",
      githubUrl: "https://github.com/KudoAkinichi",
      linkedinUrl: "https://www.linkedin.com/in/aryan-krishna-b1a7521b0/",
    },
  ];
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
