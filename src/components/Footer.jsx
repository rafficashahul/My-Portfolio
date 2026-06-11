import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div>
      <section id="footer" className={styles.footer}>
        <div className={styles.inner}>
          {/* Logo */}
          <div className={styles.logo}>RAFFICA.</div>

          {/* Text */}
          <p className={styles.text}>
            Designed & built by <span>RAFFICA</span> ·{" "}
            {new Date().getFullYear()}
          </p>

          {/* Social Links */}
          <div className={styles.links}>
            <a
              href="https://github.com/rafficashahul"
              target="_blank"
              rel="noreferrer"
              className={styles.link}
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/rafficashahul/"
              target="_blank"
              rel="noreferrer"
              className={styles.link}
            >
              LinkedIn
            </a>
            <a href="mailto:raffica.shahul@email.com" className={styles.link}>
              Email
            </a>
          </div>
        </div>

        <div className={styles.bottom}>
          Made with <span className={styles.heart}>♥</span> using React
        </div>
      </section>
    </div>
  );
};

export default Footer;
