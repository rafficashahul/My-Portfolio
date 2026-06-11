import styles from "./Projects.module.css";

const projects = [
  {
    image: "/images/project1.png",
    tags: ["HTML", "CSS", "JavaScript", "CSS Grid"],
    name: "Emoji Arcade - Memory Game",
    desc: "A fun and addictive emoji memory game built with vanilla HTML, CSS and JavaScript. Features include a card flipping system, move counter, pair tracking, victory feedback and a new round button. Built with CSS Grid, transform animations and full keyboard accessibility.",
    demo: "https://rafficashahul.github.io/emoji-memory-game/",
    github: "https://github.com/rafficashahul/emoji-memory-game",
  },
  {
    image: "/images/project2.png",
    tags: ["HTML", "CSS", "JavaScript", "Async/Await", "REST API"],
    name: "Weather Checker",
    desc: "A weather application that fetches real-time 7-day forecasts using the Open-Meteo API. Users can search for any city and the app automatically finds the nearest matching location. Built with async/await, multiple API endpoints and dynamic DOM manipulation.",
    demo: "https://rafficashahul.github.io/Climate-Check/",
    github: "https://github.com/rafficashahul/Climate-Check",
  },
  {
    image: "/images/project3.png",
    tags: ["React", "REST API", "LocalStorage", "React Router"],
    name: "Book Application",
    desc: "A responsive book application built with React that integrates with the Gutendex API. Features include searching for books, browsing by category, saving favourites to localStorage and viewing detailed book information",
    demo: "https://book-application-two.vercel.app/",
    github: "https://github.com/rafficashahul/Book-Application",
  },
];

const Projects = () => {
  return (
    <div>
      <section id="projects" className={styles.projects}>
        <div className={styles.sectionLabel}>Projects</div>
        <h2 className={styles.sectionTitle}>
          Things I've <em className={styles.highlight}>built</em>
        </h2>

        <div className={styles.grid}>
          {projects.map((project, i) => (
            <div key={i} className={styles.card}>
              {/* Thumbnail */}
              <div
                className={styles.thumb}
                style={{ backgroundImage: `url(${project.image})` }}
              >
                <div className={styles.thumbOverlay} />
              </div>

              {/* Body */}
              <div className={styles.body}>
                <div className={styles.tags}>
                  {project.tags.map((tag, j) => (
                    <span key={j} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div className={styles.name}>{project.name}</div>
                <div className={styles.desc}>{project.desc}</div>
                <div className={styles.links}>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.link}
                  >
                    → Live demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.link}
                  >
                    → GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
