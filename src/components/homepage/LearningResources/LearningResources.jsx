import ExploreComponent from "../common/ExploreComponent";
import Carousel from "./AutoSlider";

const LearningResources = () => {
    const arr1 = ["Practice Exercises and Quizzes", "Virtual Laboratories", "Discussion Forums", "Resume templates", "Mock Interviews", "Guest Lectures", "Online Courses & Tutorials"];
    const arr2 = ["Webinars", "Project Repository", "Online Library & PDF", "Online Courses & Tutorials", "Guest Lectures", "Virtual Laboratories", "Discussion Forums"];
    return (
        <>
            <div className="w-screen max-w-full flex flex-col items-center justify-center gap-6 mbMedium:px-16 mbSmall:px-5 mbMini:px-0">
                {ExploreComponent(
                    "What's Available to You 🤝",
                    "Discover Your Learning Resources",
                    "Explore all the things we offer to help you learn and grow. We have modern labs and online libraries full of useful stuff. You can find study materials, research databases, and career help to do well in your studies and future career."
                )}
            </div>
            
            <Carousel arr={arr1} speed={3000} direction={false} />
            <Carousel arr={arr2} speed={3000} direction={true} />
        </>
    );
};

export default LearningResources;
