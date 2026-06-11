import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <div>
      <section id="contact" className={styles.contact}>
        <div className={styles.sectionLabel}>Contact</div>

        <h2 className={styles.sectionTitle}>
          Let's work <em className={styles.highlight}>together.</em>
        </h2>

        <div className={styles.inner}>
          {/* Left - Text */}
          <div className={styles.text}>
            <h3 className={styles.bigText}>
              Open to <span>new opportunities.</span>
            </h3>
            <p className={styles.desc}>
              Currently seeking internship and junior Frontend Developer
              positions. I am passionate about building responsive and
              user-friendly web applications and eager to contribute to a team.
              Open to new challenges and ready to grow — let's talk!
            </p>
          </div>

          {/* Right - Links */}
          <div className={styles.links}>
            <a
              href="mailto:raffica.shahul@gmail.com"
              className={styles.linkCard}
            >
              <span className={styles.icon}>✉</span>
              <div>
                <div className={styles.linkLabel}>Email</div>
                <div className={styles.linkValue}>raffica.shahul@gmail.com</div>
              </div>
            </a>

            <a
              href="https://github.com/rafficashahul"
              target="_blank"
              rel="noreferrer"
              className={styles.linkCard}
            >
              <span className={styles.icon}>◈</span>
              <div>
                <div className={styles.linkLabel}>GitHub</div>
                <div className={styles.linkValue}>github.com/rafficashahul</div>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/rafficashahul/"
              target="_blank"
              rel="noreferrer"
              className={styles.linkCard}
            >
              <span className={styles.icon}>⬡</span>
              <div>
                <div className={styles.linkLabel}>LinkedIn</div>
                <div className={styles.linkValue}>
                  https://www.linkedin.com/in/raffica-shahul/
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
