const SkillsLanguages = ({ data, onChange, styles }) => {
  return (
    <div className={styles.formSection}>
      <div className={styles.sectionHeader}>🛠️ Capabilities Framework</div>
      
      <div className={styles.inputGroup}>
        <label htmlFor="skills">Core Tech Stack Skills</label>
        <input type="text" id="skills" className={styles.inputField} value={data.skills} onChange={onChange} placeholder="React, Node.js, MongoDB, Express, Git, Linux" />
        <small style={{ color: "#94a3b8", fontSize: "0.75rem", marginTop: "0.2rem" }}>Deconstruct items cleanly with standard commas.</small>
      </div>

      <div className={styles.inputGroup}>
        <label htmlFor="languages">Linguistic Exposure</label>
        <input type="text" id="languages" className={styles.inputField} value={data.languages} onChange={onChange} placeholder="English (Fluent), Nepali (Native)" />
      </div>
    </div>
  );
};

export default SkillsLanguages;