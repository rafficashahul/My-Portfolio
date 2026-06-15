import { useState } from "react";
import { Link } from "react-scroll";
import styles from "./Header.module.css";

const navItems = ["about", "skills", "projects", "experience", "contact"];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        {/* Logo */}
        <div className={styles.logo}>Developer</div>

        {/* Hamburger Button */}
        <button
          className={styles.hamburger}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={`${styles.bar} ${isOpen ? styles.bar1Open : ""}`} />
          <span className={`${styles.bar} ${isOpen ? styles.bar2Open : ""}`} />
          <span className={`${styles.bar} ${isOpen ? styles.bar3Open : ""}`} />
        </button>

        {/* Menu */}
        <ul className={`${styles.menu} ${isOpen ? styles.menuOpen : ""}`}>
          {navItems.map((item) => (
            <li key={item}>
              <Link
                to={item}
                smooth={true}
                duration={500}
                className={styles.link}
                onClick={closeMenu}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
