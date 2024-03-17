"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Navigation App for National Parks",
    description: "Designed to bridge the gap between technology and the natural world, this app is tailored for hikers, campers, and outdoor enthusiasts alike. My commitment to the project involved an extensive process of research, development, and implementation, ensuring the app meets and exceeds user expectations. By integrating cutting-edge technology with user-friendly interfaces, the app offers a unique tool for exploring national parks around Boston and beyond.",
    image: "/images/projects/1.png",
    tag: ["All"],
    gitUrl: "https://github.com/Sajitha18/Navigation-App-for-National-Parks",
    previewUrl: "https://github.com/Sajitha18/Navigation-App-for-National-Parks",
  },
  {
    id: 2,
    title: "Supply Chain Enhancement at Dollar Tree Inc",
    description: "This project focused on tackling significant supply chain challenges faced by Dollar Tree Inc during the Fall of 2022 in Boston. With an emphasis on problem-solving, I conducted comprehensive research, including interviews with employees and ad-hoc online studies, to identify core issues such as manpower shortages and profit margin losses. This initiative not only highlights my ability to address complex problems but also showcases my commitment to driving operational efficiency and profitability through innovative solutions.",
    image: "/images/projects/2.png",
    tag: ["All"],
    gitUrl: "https://github.com/Sajitha18/Supply-Chain-Enhancement-at-Dollar-Tree-Inc",
    previewUrl: "https://github.com/Sajitha18/Supply-Chain-Enhancement-at-Dollar-Tree-Inc",
  },
  {
    id: 3,
    title: "Multi-tasking Agricultural Robot",
    description: "The Multi-tasking Agricultural Robot project was conceived with the aim of addressing several key challenges faced by the agricultural industry, including labor shortages, high operational costs, and the need for precision farming to increase crop yields. Utilizing advanced IoT technologies, this robot is capable of performing multiple agricultural tasks concurrently, such as planting, monitoring crop health, and harvesting, all while collecting and analyzing data in real-time for optimized farm management.",
    image: "/images/projects/3.png",
    tag: ["All"],
    gitUrl: "https://github.com/Sajitha18/Multi-tasking-Agricultural-Robot",
    previewUrl: "https://github.com/Sajitha18/Multi-tasking-Agricultural-Robot",
  },
  {
    id: 4,
    title: "Sustainability in Luxury Fashion Supply Chains",
    description: "This research delves into the transformative intersection of luxury fashion with sustainability. It underscores the imperative shift in the luxury fashion industry towards integrating sustainable practices as a response to growing consumer awareness, regulatory pressures, and the ethical re-evaluation of production and consumption patterns.",
    image: "/images/projects/4.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Sajitha18/Sustainability-in-Luxury-Fashion-Supply-Chains",
    previewUrl: "https://github.com/Sajitha18/Sustainability-in-Luxury-Fashion-Supply-Chains",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Research Paper"
          isSelected={tag === "Web"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
