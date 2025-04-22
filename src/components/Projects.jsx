import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaReact, FaJs } from "react-icons/fa";
import {
  SiNextdotjs,
  SiMongodb,
  SiJavascript,
  SiJest,
  SiGraphql,
} from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";

const TechIcon = ({ icon: Icon, name }) => (
  <div className="flex flex-col items-center mx-2" title={name}>
    <Icon className="text-2xl mb-1" />
    <span className="text-xs">{name}</span>
  </div>
);

const ProjectCard = ({
  title,
  description,
  link,
  githubLink,
  techStack,
  darkMode,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`${
        darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
      } shadow-lg rounded-lg overflow-hidden relative`}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className={`${darkMode ? "text-gray-300" : "text-gray-600"} mb-4`}>
          {description}
        </p>
        <div className="flex flex-wrap mb-4">
          {techStack.map((tech, index) => (
            <TechIcon key={index} icon={tech.icon} name={tech.name} />
          ))}
        </div>
        <div className="flex justify-between items-center">
          {githubLink && (
            <motion.a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`${
                darkMode
                  ? "text-gray-300 hover:text-white"
                  : "text-gray-600 hover:text-gray-800"
              }`}
              whileHover={{ scale: 1.1 }}
            >
              <FaGithub size={24} />
            </motion.a>
          )}
          {link && (
            <motion.a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className={`md:hidden ${
                darkMode
                  ? "text-gray-300 hover:text-white"
                  : "text-gray-600 hover:text-gray-800"
              } flex items-center`}
              whileHover={{ scale: 1.1 }}
            >
              <FaExternalLinkAlt size={20} className="mr-2" />
              <span>Visit Project</span>
            </motion.a>
          )}
        </div>
      </div>
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center hidden md:flex"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="w-full h-full flex flex-col items-center justify-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.3 }}
            >
              <iframe
                src={link}
                title={title}
                className="w-full h-3/4 mb-4 rounded-lg shadow-lg"
                frameBorder="0"
              />
              {link && (
                <motion.a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-white hover:text-blue-400 transition-colors duration-300 flex items-center`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaExternalLinkAlt size={24} className="mr-2" />
                  <span>Visit Project</span>
                </motion.a>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Projects = ({ darkMode }) => {
  const projectsData = [
    {
      title: "Online Bank account opening system",
      description:
        "Developed an Online Bank Account Opening system that enables customers to initiate E-Onboarding by completing forms that gather personal information. ",
      techStack: [
        { icon: FaReact, name: "React" },
        { icon: FaJs, name: "JavaScript" },
        { icon: SiJavascript, name: "REST API" },
        { icon: SiJest, name: "RTL Jest" },
      ],
    },
    {
      title: "Property-pulse",
      description:
        "A Next.js web application that allows users to search for properties, view property details, and save their favorite listings. It uses MongoDB cloud database for data storage and Next.js for server-side rendering.",
      link: "https://property-pulse-tau-dusky.vercel.app/",
      techStack: [
        { icon: FaReact, name: "React" },
        { icon: SiNextdotjs, name: "Next.js" },
        { icon: SiMongodb, name: "MongoDB" },
      ],
    },
    {
      title: "Joint ownership on credit card",
      description:
        "Developed a joint credit card ownership application enabling primary and secondary owners to complete registration processes through forms capturing essential and relative information.",
      techStack: [
        { icon: FaReact, name: "React" },
        { icon: FaJs, name: "JavaScript" },
        { icon: BiLogoTypescript, name: "TypeScript" },
        { icon: SiJest, name: "RTL Jest" },
        { icon: SiGraphql, name: "GraphQL API" },
      ],
    },
  ];

  return (
    <motion.div
      className={`container mx-auto py-12 px-4 ${
        darkMode ? "text-white" : "text-black"
      }`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
        initial="hidden"
        animate="show"
      >
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 50 },
              show: { opacity: 1, y: 0 },
            }}
          >
            <ProjectCard {...project} darkMode={darkMode} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Projects;
