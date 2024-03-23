import Navbar from "@/components/Navbar/Navbar";
import About from "@/components/homepage/About/About";
import Courses from "@/components/homepage/Courses/Courses";
import Faq from "@/components/homepage/Faq/Faq";
import Hero from "@/components/homepage/Hero/Hero";
import Mission from "@/components/homepage/Mission/Mission";
import BTS from "@/components/homepage/BTS/BTS";
import data from "@/data/homepage/data.json";
import Footer from "@/components/Footer/Footer";
import LearningResources from "@/components/homepage/LearningResources/page";
export default function Home() {
  return (
    <main className="flex flex-col gap-8 max-w-[100vw]">
      <Navbar />
      <Hero id="top" />
      <About align1="flex-row" data={data} id="about"/>
      <Mission id="mission" />
      <Courses id="courses"/>
      <LearningResources />
      <BTS align1="flex-row-reverse" data={data} id="bts" />
      <Faq />
      <Footer />
    </main>
  );
}
