import { motion } from "framer-motion";
import styles from "./About.module.css";

function About() {
  const skills = [
    "React",
    "Vite",
    "CSS",
    "HTML",
    "JavaScript",
    "Node.js",
    "NPM",
    "Jest",
    "Git",
    "GitHub",
  ];

  const containerVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.15, duration: 0.5 },
    },
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      id="skills"
      className={styles.aboutCard}
      animate={{ y: [0, -12, 0] }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 0.2,
      }}
      whileHover={{
        scale: 1.03,
        boxShadow: "0 0 45px var(--accent-rose)",
        border: "1px solid var(--accent-rose)",
      }}
    >
      <motion.h2
        variants={containerVariant}
        initial="hidden"
        animate="visible"
        className={styles.title}
      >
        Skills
      </motion.h2>

      <motion.div
        className={styles.skills}
        variants={containerVariant}
        initial="hidden"
        animate="visible"
      >
        {skills.map((skill, index) => (
          <motion.span
            key={index}
            className={styles.skillBadge}
            variants={itemVariant}
            whileHover={{
              scale: 1.1,
              boxShadow: "0 0 20px var(--accent-rose)",
            }}
          >
            {skill}
          </motion.span>
        ))}
      </motion.div>
    </motion.section>
  );
}

export default About;
