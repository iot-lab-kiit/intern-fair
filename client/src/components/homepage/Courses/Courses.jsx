"use client";
import EmblaCarousel from "./EmblaCarousel";
import ExploreComponent from "../common/ExploreComponent";

// import '../Courses/embla.css';
const OPTIONS = { dragFree: true };
const Courses = () => {
  return (
    <div
      id="suggestion"
      className="w-screen max-w-full  flex flex-col items-center justify-center gap-6 mbMini:gap-[0.3rem]  mbMedium:px-16 mbSmall:px-5 mbMini:px-0"
    >
      {ExploreComponent(
        "Courses for you 🤝",
        "Tailored Courses for Your Success",
        "Explore our comprehensive selection of courses, designed to help you master the in-demand skills. We offer a wide range of structured courses, from foundational levels to advanced specializations, so you can start your learning journey and become the best in your chosen field."
      )}
      <EmblaCarousel options={OPTIONS} />
    </div>
  );
};

export default Courses;
