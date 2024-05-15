import Navbar from "@/components/Navbar/Navbar";
import Navigation from "@/components/courses/Navigation/Navigation";

const page = () => {
  const DropDownData = [
    {
      title: "Web Development",
      links: [
        { label: "HTML", url: "/html" },
        { label: "CSS", url: "/css" },
        { label: "JS", url: "/js" },
        { label: "React", url: "/react" },
        { label: "Node", url: "/node" },
        { label: "Express", url: "/express" },
      ],
    },
    {
      title: "App Development",
      links: [
        { label: "React", url: "/react" },
        { label: "Flutter", url: "/flutter" },
        { label: "Swift", url: "/swift" },
      ],
    },
    {
      title: "Data Science",
      links: [
        { label: "Python", url: "/python" },
        { label: "R", url: "/r" },
        { label: "SQL", url: "/sql" },
      ],
    },
    {
      title: "Machine Learning",
      links: [
        { label: "ML", url: "/ml" },
        { label: "DL", url: "/dl" },
        { label: "AI", url: "/ai" },
      ],
    },
    {
      title: "Cloud Computing",
      links: [
        { label: "AWS", url: "/aws" },
        { label: "Azure", url: "/azure" },
        { label: "GCP", url: "/gcp" },
      ],
    },
  ];
  return (
    <>
      <Navbar />
      <Navigation />
      hello
    </>
  );
};

export default page;
