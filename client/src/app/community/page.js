import Navbar from "@/components/Navbar/Navbar";
import CommunitySection from "@/components/communityPage/CommunitySection/CommunitySection";
const page = () => {
  return (
    <main className="flex flex-col gap-8 max-w-[100vw]">
      <Navbar />
      <CommunitySection />
    </main>
  );
};

export default page;
