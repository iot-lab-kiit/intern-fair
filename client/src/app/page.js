import Navbar from "@/components/Navbar";
import About from "@/components/homepage/About";
import BTS from "@/components/homepage/BTS";
import Courses from "@/components/homepage/Courses";
import Faq from "@/components/homepage/Faq";
import Hero from "@/components/homepage/Hero";
import Mission from "@/components/homepage/Mission";
import data from "@/data/homepage/homepage.json";
export default function Home() {
  return (
    <main className="flex flex-col gap-8">
      <Navbar />
      <Hero />
      <About align1="flex-row" data={data}/>
      <Mission />
      <Courses />
      <BTS align1="flex-row-reverse" data={data}/>
      <Faq />
    </main>
  );
}
