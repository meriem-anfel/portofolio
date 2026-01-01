
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";
import styles from "./Contact.module.css";
import videoTel from "../img/Tel.MP4";

export default function Contact() {
  const [form, setForm] = useState({ nom: "", email: "", message: "" });
  const [success, setSuccess] = useState(null);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const sendEmail = async (e) => {
    e.preventDefault();
    const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (!form.nom || !form.email || !form.message || !gmailRegex.test(form.email)) {
      setSuccess(false);
      return;
    }

    try {
      const response = await fetch("https://formspree.io/f/mwveyndq", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setSuccess(true);
        setForm({ nom: "", email: "", message: "" });
      } else {
        setSuccess(false);
      }
    } catch {
      setSuccess(false);
    }
  };

  
  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => setSuccess(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [success]);

  return (
    <section className={styles.contact}>
      <div className={styles.container}>
        <motion.div
          className={styles.leftIcon}
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.video
            src={videoTel}
            autoPlay
            loop
            muted
            playsInline
            className={styles.bigIcon}
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
          />
        </motion.div>

        <motion.form
          className={styles.form}
          onSubmit={sendEmail}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.h2
            className={styles.title}
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Contact Me
          </motion.h2>

          <input
            type="text"
            name="nom"
            placeholder="Nom complet"
            value={form.nom}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email @gmail.com"
            value={form.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Votre message..."
            value={form.message}
            onChange={handleChange}
            required
          />

          {success === true && (
            <p className={styles.success}>Message envoyé avec succès !</p>
          )}
          {success === false && (
            <p className={styles.error}>Email invalide (Gmail uniquement)</p>
          )}

          <motion.button
            type="submit"
            className={styles.button}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaPaperPlane /> Envoyer
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
