import Navbar from "@/components/Navbar/Navbar";
import About from "@/components/homepage/About/About";
import Courses from "@/components/homepage/Courses/Courses";
import Faq from "@/components/homepage/Faq/Faq";
import Hero from "@/components/homepage/Hero/Hero";
import LearningResources from "@/components/homepage/LearningResources/LearningResources";
import Mission from "@/components/homepage/Mission/Mission";
import BTS from "@/components/homepage/BTS/BTS";
import data from "@/data/homepage/data.json";
import Suggestion from "@/components/homepage/Suggestion/Suggestion";
import Community from "@/components/homepage/Community/Community";

export default function Home() {
  return (
    <main className="flex flex-col gap-8 max-w-[100vw]">
      <Navbar />
      <Hero />
      {/* <About /> */}
      <Mission />
      <Courses />
      {/* <Faq /> */}
      <About align1="flex-row" data={data} />
      <Mission />
      <Courses />
      <BTS align1="flex-row-reverse" data={data} />
      <Faq />
      <LearningResources />
      <Community />
      <Suggestion />
    </main>
  );
}
