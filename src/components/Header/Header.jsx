import styles from "./Header.module.css";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <div className={styles.header}>
      <nav className={styles.nav}>
        <h1 className={styles.logo}>Developer</h1>
        <ul className={styles.menu}>
          <li>
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li>
            <Link to="skills" smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="projects" smooth={true} duration={500}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="experience" smooth={true} duration={500}>
              Experience
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
