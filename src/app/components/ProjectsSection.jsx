"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "My Surf",
    description: "Surf-Board rental website done with html, css, bootstratp, php and mysql (2017)",
    image: "images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/thinobrega/mysurf",
    previewUrl: "https://mysurf-psi.vercel.app/",
  },
  {
    id: 2,
    title: "Portfolio",
    description: "React, Tailwindcss, Vite (2025)",
    image: "images/projects/99.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/thinobrega/blueportfolio",
    previewUrl: "https://blueportfolio-eosin.vercel.app/",
  },
  {
    id: 3,
    title: "React Form",
    description: "Form – React, Tailwind, shadcn, typescript, zod (2025)",
    image: "images/projects/88.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/thinobrega/reactform",
    previewUrl: "https://reactform-six.vercel.app/",
  },
 
  {
    id: 4,
    title: "Fitness Pro",
    description: "Landing Page - React & Tailwindcss v.4 (2025)",
    image: "images/projects/4.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "React Firebase Template",
    description: "Authentication and CRUD operations",
    image: "images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Full-stack Roadmap",
    description: "Project 5 description",
    image: "images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
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
        My Projects (coming soon)
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
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