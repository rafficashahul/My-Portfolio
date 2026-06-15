import styles from "./About.module.css";

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.sectionLabel}>About</div>
      <h2 className={styles.sectionTitle}>
        A little bit <em className={styles.highlight}>about me</em>
      </h2>

      <div className={styles.grid}>
        <div className={styles.bio}>
          <p className={styles.bioText}>
            With a background in Computer Science Engineering and hands-on IT
            experience, I am now channeling my technical foundation into
            Frontend Development. I am passionate about building responsive and
            user-friendly web applications using HTML, CSS, JavaScript and
            React.
          </p>
          <p className={styles.bioText}>
            I design and implement UI/UX solutions using Figma and use Git,
            GitHub and VS Code for efficient development and clean code
            practices.
          </p>
          <p className={styles.bioText}>
            Motivated and eager to learn with a great interest in technology and
            development. I enjoy learning new technologies and developing my
            skills continuously. Social and positive, with a strong ability to
            adapt to new challenges.
          </p>
        </div>
        <div className={styles.stats}>
          <div className={styles.statCard}>
            <div className={`${styles.statNum} ${styles.c1}`}>10+</div>
            <div className={styles.statLabel}>Projects built</div>
          </div>
          <div className={styles.statCard}>
            <div className={`${styles.statNum} ${styles.c2}`}>5+</div>
            <div className={styles.statLabel}>Technologies used</div>
          </div>
          <div className={styles.statCard}>
            <div className={`${styles.statNum} ${styles.c3}`}>100%</div>
            <div className={styles.statLabel}>Passion for coding</div>
          </div>
          <div className={styles.statCard}>
            <div className={`${styles.statNum} ${styles.c4}`}>∞</div>
            <div className={styles.statLabel}>Eagerness to learn</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
