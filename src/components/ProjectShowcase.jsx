
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./ProjectShowcase.module.css";
import { FaGithub } from "react-icons/fa";


function ProjectCard({ project }) {
  return (
    <motion.div
      className={styles.card}
      animate={{ y: [0, -6, 0] }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
        delay: Math.random() * 1.5,
      }}
      whileHover={{
        scale: 1.05,
        boxShadow: "0 0 40px var(--accent-rose)",
        border: "1px solid var(--accent-rose)",
      }}
    >
      <h3>{project.title}</h3>
      <p>{project.description}</p>

      <p className={styles.tech}>
        {project.tech.map((t, i) => (
          <span key={i}>{t}</span>
        ))}
      </p>

      <div className={styles.links}>
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className={styles.link}
        >
          <FaGithub style={{ marginRight: "6px" }} />
          GitHub Repository
        </a>
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className={styles.link}
          >
            Live Demo
          </a>
        )}
      </div>
    </motion.div>
  );
}


export default function ProjectShowcase() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {

    const projectsData = [
      {
        title: "Lab 1: HTML & Web Page Structuring",
        description:
          "Lab project focused on structuring and styling web pages with HTML, including images, lists, links, and multimedia.",
        tech: ["HTML", "CSS"],
        github: "https://github.com/meriem-anfel/caw-labs/tree/main/Lab1",
      },
      {
        title: "Lab 2: Git & GitHub",
        description:
          "Lab project focused on learning Git version control, GitHub workflow, and project management.",
        tech: ["Git", "GitHub", "GitLab", "Version Control"],
        github: "https://github.com/meriem-anfel/caw-labs/tree/lab2-setup/Lab2",
      },
      {
        title: "Lab 3: Node Project",
        description:
          "Node.js project practicing modules, file handling, NPM packages, and basic server-side JavaScript.",
        tech: ["Node.js", "NPM", "JavaScript"],
        github: "https://github.com/meriem-anfel/lab3-node",
      },
      {
        title: "Lab 4: Initiation to Jest",
        description:
          "Lab project focused on testing JavaScript functions using the Jest framework.",
        tech: ["JavaScript", "Node.js", "Jest", "NPM"],
        github: "https://github.com/meriem-anfel/caw-labs/tree/lab2-setup/Lab4_Jest",
      },
      {
        title: "Lab 5: React Project",
        description:
          "React project practicing state, events, list rendering, forms, and dynamic DOM manipulation.",
        tech: ["React", "Vite", "CSS"],
        github: "https://github.com/meriem-anfel/React",
      },
      {
        title: "Lab 6 - My First Vite App",
        description:
          "First React project created with Vite as part of the Web Application Design.",
        tech: ["React", "Vite", "JavaScript", "CSS", "HTML", "Node.js", "NPM"],
        github: "https://github.com/meriem-anfel/lab6_MyFirstVite",
      },
      {
        title: "Lab 7: Kanban Board",
        description: "Task management application with Kanban.",
        tech: ["React", "Vite", "CSS"],
        github: "https://github.com/meriem-anfel/lab7Kanban-board",
        demo: "https://chipper-macaron-1bf678.netlify.app"
      },
    ];

    setProjects(projectsData);
  }, []);

  return (
    <section id="projects" className={styles.projects}>
      <h2 className={styles.title}>My Projects</h2>

      <div className={styles.grid}>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}
