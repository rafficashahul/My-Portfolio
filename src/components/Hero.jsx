import { Link } from "react-scroll";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.bg} />

      <div className={styles.tag}>✦ Available for hire</div>

      <h1 className={styles.name}>
        Hi, I'm Raffica Shahul Hameed
        <span className={styles.highlight}>Frontend Developer.</span>
      </h1>

      <p className={styles.desc}>
        Frontend Developer focused on building responsive and user-friendly web
        experiences using JavaScript and React.
      </p>

      <div className={styles.ctas}>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          className={styles.btnPrimary}
        >
          View Projects
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          className={styles.btnOutline}
        >
          Contact Me
        </Link>
      </div>

      <div className={styles.scroll}>
        <span>scroll</span>
        <div className={styles.scrollLine} />
      </div>
    </section>
  );
};

export default Hero;
