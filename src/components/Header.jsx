import { motion } from "framer-motion";
import { FaHome, FaTools, FaProjectDiagram, FaEnvelope, FaBook } from "react-icons/fa";
import styles from "./Header.module.css";

function Header() {
  const navItems = [
    { name: "Home", href: "#home", icon: <FaHome /> },
    { name: "Projects", href: "#projects", icon: <FaProjectDiagram /> },
    { name: "Skills", href: "#skills", icon: <FaTools /> },
    { name: "Contact", href: "#contact", icon: <FaEnvelope /> },
  ];

  return (
    <motion.header
      className={styles.header}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Logo */}
      <motion.div
        className={styles.logo}
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
      >
        <FaBook className={styles.logoIcon} />
        <h1>My Portfolio</h1>
      </motion.div>

      {/* Navigation */}
      <nav className={styles.nav}>
        {navItems.map((item, index) => (
          <motion.a
            key={item.name}
            href={item.href}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + index * 0.15 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              className={styles.icon}
              whileHover={{ y: [-2, 2, -2], rotate: [-5, 5, -5] }}
              transition={{ duration: 0.6, repeat: Infinity, repeatType: "mirror" }}
            >
              {item.icon}
            </motion.span>
            <span className={styles.linkText}>{item.name}</span>
          </motion.a>
        ))}
      </nav>
    </motion.header>
  );
}

export default Header;
