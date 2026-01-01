import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.socials}>
        {/* LinkedIn */}
        <div className={styles.emailBox}>
          <a
            href="https://www.linkedin.com/in/meriem-djeghader-978805389/"
            target="_blank"
            rel="noreferrer"
            className={styles.iconLink}
          >
            <FaLinkedin />
          </a>
          <span className={styles.emailText}>
            linkedin.com/in/meriem-djeghader-978805389
          </span>
        </div>

        {/* Email */}
        <div className={styles.emailBox}>
          <a
            href="mailto:djeghader.meriem@gmail.com"
            className={styles.iconLink}
          >
            <FaEnvelope />
          </a>
          <span className={styles.emailText}>
            djeghader.meriem@gmail.com
          </span>
        </div>
      </div>

      <p className={styles.text}>
        © 2025 Meriem Anfel. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
