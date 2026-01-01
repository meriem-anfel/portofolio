import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import styles from "./Home.module.css";
import video from "../img/avatar.mp4";

function Home() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const containerVariant = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const itemVariant = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const avatarVariant = {
    hidden: { opacity: 0, x: -250 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  return (
    <motion.section
      className={styles.home}
      ref={ref}
      variants={containerVariant}
      initial="hidden"
      animate={controls}
    >
      {/* Avatar vidéo */}
      <motion.video
        src={video}
        className={styles.avatar}
        autoPlay
        loop
        muted
        playsInline
        variants={avatarVariant}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      />

      {/* Content */}
      <motion.div className={styles.content} variants={containerVariant}>
        <motion.h1
          className={styles.name}
          variants={itemVariant}
          whileHover={{ scale: 1.02 }}
        >
          Djeghader Meriem Anfel
        </motion.h1>

        <motion.h2 variants={itemVariant} whileHover={{ scale: 1.02 }}>
          Junior React Developer
        </motion.h2>

        <motion.p
          className={styles.bio}
          variants={itemVariant}
          whileHover={{ scale: 1.01 }}
        >
          Passionate computer science student and aspiring web developer. I
          love building modern and interactive web applications using React
          and JavaScript.
        </motion.p>

        {/* Buttons */}
        <motion.div className={styles.buttons} variants={itemVariant}>
          <motion.a
            href="#projects"
            className={styles.button}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.a>

          <motion.a
            href="https://github.com/meriem-anfel"
            target="_blank"
            rel="noreferrer"
            className={styles.buttonOutline}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            My GitHub
          </motion.a>

          <motion.a
            href="#contact"
            className={styles.buttonOutline}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.a>
        </motion.div>

        {/* SOCIAL ICONS */}
        <motion.div
          className={styles.socials}
          variants={itemVariant}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <motion.a
            href="https://github.com/meriem-anfel"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.25, y: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaGithub />
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/meriem-djeghader-978805389/"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.25, y: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaLinkedin />
          </motion.a>

          <motion.a
            href="https://www.instagram.com/djeghadermeriem?igsh=ZGVvdWZuZzludnFo"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.25, y: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaInstagram />
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default Home;
