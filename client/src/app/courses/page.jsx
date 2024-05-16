"use client";
import { useState, useEffect } from "react";
import { getTopics, getSubtopicsByTopicId } from "@/actions/topic";
import Navbar from "@/components/Navbar/Navbar";
import Navigation from "@/components/courses/Navigation/Navigation";
import ExploreComponent from "@/components/homepage/common/ExploreComponent";
import { ClientOnlyDropdown } from "@/components/courses/Dropdown/Dropdown";
import Link from "next/link";

const Page = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const topicsData = await getTopics();
        setTopics(topicsData.result); // Set the topics state with fetched data
        // console.log(topicsData.result);
      } catch (error) {
        console.error("Error fetching topics:", error);
      }
    };

    fetchTopics();
  }, []);

  return (
    <>
      <Navbar />
      <Navigation />

      <div className="w-screen max-w-full flex flex-col items-center justify-center gap-6 mbMedium:px-16 mbSmall:px-5 mbMini:px-0 my-16">
        <ExploreComponent
          buttonText="Courses for you 🤝"
          headingText="Tailored Courses for Your Success"
          contentText="Explore our comprehensive selection of courses tailored to meet your academic and career aspirants. From foundational subjects to advanced specialties, we offer a diverse range of courses designed to equip you with the knowledge and skills"
        />
      </div>
      {/* dropdowns */}
      <div className="w-screen max-w-full flex flex-col items-center justify-center gap-8 mbMedium:px-16 mbSmall:px-5 mbMini:px-0">
        <ClientOnlyDropdown
          DropDownData={topics.map((topic) => ({
            title: topic.name,
            links: (topic.subTopicID ?? []).map(async (subtopicId) => {
              try {
                const subtopicData = await getSubtopicsByTopicId(subtopicId);
                console.log(subtopicData.result);
                return {
                  label: subtopicData.result.name,
                  url: "#",
                };
              } catch (error) {
                console.error("Error fetching subtopic:", error);
                return null;
              }
            }),
          }))}
        />
      </div>
    </>
  );
};

export default Page;
