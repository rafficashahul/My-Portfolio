import styles from "./Experience.module.css";

const experiences = [
  {
    date: "2026-present",
    role: "Frontend Development Student",
    company: "Kodehode,Sandefjord, Norway",
    desc: "Developed responsive and user-friendly websites using HTML, CSS, JavaScript and React. Designed and implemented UI/UX solutions in Figma and built dynamic and interactive websites using modern JavaScript. Used Git and GitHub for version control along with VS Code and developer tools for efficient development and debugging. Focused on usability, clean design and translating design into functional code. Currently expanding knowledge in Next.js, Security and SQL.",
  },
  {
    date: "2024-2025",
    role: "IT Technician",
    company: "Foxway AS, Sandefjord, Norway",
    desc: "Provided IT support and technical assistance as part of a team of technicians. Responsibilities included laptop and desktop hardware maintenance, component replacements and secure data deletion in a controlled environment. Maintained system performance through regular software updates and documented all technical work accurately.",
  },
  {
    date: "2009-2013",
    role: "Computer Technician",
    company: "Nano IT Solution,Chennai, India",
    desc: "Assembled and maintained computers while ensuring compliance with technical procedures. Prepared work by studying assembly instructions and parts lists. Responsible for quality control of finished products and guiding colleagues in assembly processes. Managed document control and archiving.",
  },
  {
    date: "2005-2009",
    role: "Bachelor's Degree in Computer Science Engineering",
    company: "Anna University,Chennai, India",
    desc: "Completed a Bachelor's Degree in Computer Science Engineering. Gained a solid foundation in computer science principles and programming concepts.",
  },
];

const Experience = () => {
  return (
    <div>
      <section id="experience" className={styles.experience}>
        <div className={styles.sectionLabel}>Experience</div>
        <h2 className={styles.sectionTitle}>
          Where I've <em className={styles.highlight}>worked</em>
        </h2>

        <div className={styles.timeline}>
          {experiences.map((exp, i) => (
            <div key={i} className={styles.item}>
              {/* Date */}
              <div className={styles.date}>{exp.date}</div>

              {/* Dot */}
              <div className={styles.dot} />

              {/* Content */}
              <div className={styles.content}>
                <div className={styles.role}>{exp.role}</div>
                <div className={styles.company}>{exp.company}</div>
                <div className={styles.desc}>{exp.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Experience;
