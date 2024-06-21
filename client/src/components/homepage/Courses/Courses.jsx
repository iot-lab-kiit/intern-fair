"use client";
import EmblaCarousel from "./EmblaCarousel";
import ExploreComponent from "../common/ExploreComponent";

// import '../Courses/embla.css';
const OPTIONS = {dragFree: true};
const Courses = () => {
    return (
        <div id="suggestion" className="w-screen max-w-full  flex flex-col items-center justify-center gap-6 mbMini:gap-[0.3rem]  mbMedium:px-16 mbSmall:px-5 mbMini:px-0" >
            {ExploreComponent(
                "Courses for you 🤝",
                "Tailored Courses for Your Success",
                "   Explore our comprehensive selection of courses tailored to meet your academic and career aspirants. From foundational subjects to advanced specialties, we offer a diverse range of courses designed to equip you with the knowledge and skills"
            )}
            <EmblaCarousel options={OPTIONS} />
        </div>
    );
};

export default Courses;
