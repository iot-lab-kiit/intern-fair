import Navbar from "@/components/Navbar/Navbar";
import About from "@/components/homepage/About/About";
import Courses from "@/components/homepage/Courses/Courses";
import Faq from "@/components/homepage/Faq/Faq";
import Hero from "@/components/homepage/Hero/Hero";
import LearningResources from "@/components/homepage/LearningResources/LearningResources";
import Mission from "@/components/homepage/Mission/Mission";

export default function Home() {
  return (
    <main className="flex flex-col gap-8 max-w-[100vw]">
      {/* <Navbar />
      <Hero />
      <About />
      <Mission /> */}
      <Courses />
      <LearningResources/>
      {/* <Faq /> */}
    </main>
  );
}
