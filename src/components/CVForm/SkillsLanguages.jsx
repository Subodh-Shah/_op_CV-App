import styles from "./styles/CVForm.module.css";

const SkillsLanguages = ({ data, onChange }) => {
  return (
    <div className={styles.section}>
      <div className={styles.sectionTitle}>⚙️ Skills & Languages</div>
      <div className={styles.formGrid}>
        <div className={styles.fullWidth}>
          <div className={styles.inputGroup}>
            <label>Technical & Soft Skills (comma‑separated)</label>
            <textarea
              id="skills"
              rows="2"
              value={data.skills}
              onChange={onChange}
              placeholder="JavaScript, React, Python, Project Management, Figma"
            ></textarea>
          </div>
        </div>
        <div className={styles.fullWidth}>
          <div className={styles.inputGroup}>
            <label>Languages (comma‑separated with level)</label>
            <textarea
              id="languages"
              rows="1"
              value={data.languages}
              onChange={onChange}
              placeholder="English (native), Spanish (fluent), French (intermediate)"
            ></textarea>
          </div>
        </div>
        <div className={styles.fullWidth}>
          <div className={styles.inputGroup}>
            <label>Certifications / Awards</label>
            <textarea
              id="certifications"
              rows="2"
              value={data.certifications}
              onChange={onChange}
              placeholder="PMP, Google UX Certificate, Innovation Award 2023"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsLanguages;
