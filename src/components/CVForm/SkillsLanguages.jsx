const SkillsLanguages = ({ data, onChange, styles }) => {
  return (
    <>
      <div className={styles.inputGroup}>
        <label htmlFor="skills">Core Tech Stack Skills</label>
        <input type="text" id="skills" className={styles.inputField} value={data.skills} onChange={onChange} placeholder="React, Node.js, MongoDB, Git" />
        <small style={{ color: "#94a3b8", fontSize: "0.7rem", marginTop: "0.1rem" }}>Separate items with standard commas.</small>
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="languages">Linguistic Exposure</label>
        <input type="text" id="languages" className={styles.inputField} value={data.languages} onChange={onChange} placeholder="English, Nepali" />
      </div>
    </>
  );
};
export default SkillsLanguages;