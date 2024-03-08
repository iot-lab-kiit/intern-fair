import Navbar from "@/components/Navbar";
import About from "@/components/homepage/About";
import Courses from "@/components/homepage/Courses";
import Faq from "@/components/homepage/Faq";
import Hero from "@/components/homepage/Hero";
import Mission from "@/components/homepage/Mission";

export default function Home() {
  return (
    <main className="flex flex-col gap-8 max-w-[120rem]">
      <Navbar />
      <Hero />
      <About />
      <Mission />
      <Courses />
      <Faq />
    </main>
  );
}
