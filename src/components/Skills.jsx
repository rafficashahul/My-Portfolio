import styles from './Skills.module.css'

const skills = {
  programming: ['HTML5', 'CSS3', 'JavaScript', 'React'],
  design: ['Figma', 'UI/UX Design', 'Responsive Design'],
  tools: ['Git', 'GitHub', 'VS Code', 'Chrome DevTools'],
  database: ['SQL'],
  it: ['Troubleshooting', 'Hardware Maintenance', 'System Installation'],
}

const Skills = () => {
  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.sectionLabel}>Skills</div>
      <h2 className={styles.sectionTitle}>
        My <em className={styles.highlight}>toolkit</em>
      </h2>

      <div className={styles.grid}>

        {/* Skills List */}
        <div className={styles.skillsContainer}>
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className={styles.category}>
              <div className={styles.categoryLabel}>{category}</div>
              <div className={styles.tagList}>
                {items.map((skill, i) => (
                  <span key={i} className={styles.tag}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Right Side - Quotes & Links */}
        <div className={styles.reference}>

          {/* Quote 1 - Weather Checker */}
          <div className={styles.quoteCard}>
            <div className={styles.quote}>
              "Clean code that does exactly what the assignment asks for. Cool
              that this API looks up the nearest correct city based on what you
              type in the input."
            </div>
            <div className={styles.quoteAuthor}>
              — Code Review · Weather Checker, Kodehode
            </div>
          </div>

          {/* Quote 2 - Memory Game */}
          <div className={styles.quoteCard}>
            <div className={styles.quote}>
              "There are many good and tricky methods that have been used here
              to solve different challenges. .dataset.match is very nice for
              comparing the two values in pairs. Very well done assignment."
            </div>
            <div className={styles.quoteAuthor}>
              — Code Review · Emoji Memory Game, Kodehode
            </div>
          </div>

          {/* Project Links */}
          <div className={styles.projects}>
            <div className={styles.projectsLabel}>
              See my skills in action:
            </div>
            <div className={styles.projectLinks}>
              
                <a href="https://rafficashahul.github.io/emoji-memory-game/"
                target="_blank"
                rel="noreferrer"
                className={styles.projectLink}
              >
                → Emoji Memory Game
              </a>
              
                <a href="https://rafficashahul.github.io/Climate-Check/"
                target="_blank"
                rel="noreferrer"
                className={styles.projectLink}
              >
                → Weather Checker
              </a>
              
                < a href="https://rafficashahul.github.io/Craftvilla/"
                target="_blank"
                rel="noreferrer"
                className={styles.projectLink}
              >
                → Craftsvilla
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Skills