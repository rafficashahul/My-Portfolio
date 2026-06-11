import styles from './Skills.module.css'

const skills = {
  programming: [
    { name: 'HTML', pct: 90, color: '#FF3D57' },
    { name: 'CSS', pct: 85, color: '#FFD84D' },
    { name: 'JavaScript', pct: 80, color: '#FFD84D' },
    { name: 'React', pct: 75, color: '#3DFFC0' },
  ],
  design: [
    { name: 'Figma', pct: 78, color: '#5B8DFF' },
  ],
  tools: [
    { name: 'Git', pct: 80, color: '#FF3D57' },
    { name: 'GitHub', pct: 80, color: '#3DFFC0' },
    { name: 'VS Code', pct: 90, color: '#5B8DFF' },
    { name: 'Chrome DevTools', pct: 75, color: '#FFD84D' },
  ],
  database: [
    { name: 'SQL', pct: 65, color: '#5B8DFF' },
  ],
  it: [
    { name: 'Troubleshooting', pct: 80, color: '#3DFFC0' },
    { name: 'Hardware', pct: 70, color: '#5B8DFF' },
    { name: 'System Install', pct: 70, color: '#FFD84D' },
  ],
}

const SkillGrid = ({ items }) => (
  <div className={styles.grid}>
    {items.map((skill, i) => (
      <div key={i} className={styles.card}>
        <div className={styles.skillName}>{skill.name}</div>
        <div className={styles.barBg}>
          <div
            className={styles.barFill}
            style={{ width: `${skill.pct}%`, background: skill.color }}
          />
        </div>
      </div>
    ))}
  </div>
)

const Skills = () => {
  return (
    <div>
      <section id="skills" className={styles.skills}>

        <div className={styles.sectionLabel}>Skills</div>
        <h2 className={styles.sectionTitle}>
          My <em className={styles.highlight}>toolkit</em>
        </h2>

        <div className={styles.categoryLabel}>Programming</div>
        <SkillGrid items={skills.programming} />

        <div className={styles.categoryLabel}>Design</div>
        <SkillGrid items={skills.design} />

        <div className={styles.categoryLabel}>Tools</div>
        <SkillGrid items={skills.tools} />

        <div className={styles.categoryLabel}>Database</div>
        <SkillGrid items={skills.database} />

        <div className={styles.categoryLabel}>IT</div>
        <SkillGrid items={skills.it} />

      </section>
    </div>
  )
}

export default Skills