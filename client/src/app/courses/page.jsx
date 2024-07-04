"use client";
import React, { useState, useEffect } from "react";
import { getTopics, getSubtopicsByTopicId } from "@/actions/topic";
import Navbar from "@/components/Navbar/Navbar";
import Navigation from "@/components/courses/Navigation/Navigation";
import ExploreComponent from "@/components/homepage/common/ExploreComponent";
import { ClientOnlyDropdown } from "@/components/courses/Dropdown/Dropdown";
import Link from "next/link";
import { checkboxGroup } from "@nextui-org/react";
import Loader from "@/components/ui/Loader/Loader";

const Page = () => {
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const topicsData = await getTopics();
        setTopics(topicsData.result);
      } catch (error) {
        console.error("Error fetching topics:", error);
      } finally {
        setLoading(false); // Hide loader after fetching data
      }
    };

    fetchTopics();
  }, []);

  return (
    <>
      <Navigation />
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="w-screen max-w-full flex flex-col items-center justify-center gap-6 mbMedium:px-16 mbSmall:px-5 mbMini:px-0 my-16">
            <ExploreComponent
              buttonText="Courses for you 🤝"
              headingText="Tailored Courses for Your Success"
              contentText="Explore our comprehensive selection of courses tailored to meet your academic and career aspirations. From foundational subjects to advanced specialties, we offer a diverse range of courses designed to equip you with the knowledge and skills."
            />
          </div>

          <div className="w-screen max-w-full flex flex-col items-center justify-center gap-8 mbMedium:px-16 mbSmall:px-5 mbMini:px-0">
            <ClientOnlyDropdown DropDownData={topics} />
          </div>
        </>
      )}
    </>
  );
};

export default Page;
