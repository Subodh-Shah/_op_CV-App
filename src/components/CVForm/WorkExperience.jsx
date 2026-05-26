import styles from "./styles/CVForm.module.css";

const WorkExperience = ({ data, onChange }) => {
  return (
    <div className={styles.section}>
      <div className={styles.sectionTitle}>💼 Work Experience</div>
      <div className={styles.formGrid}>
        <div className={styles.row}>
          <div className={styles.inputGroup}>
            <label>Job Title</label>
            <input
              type="text"
              id="jobTitle"
              value={data.jobTitle}
              onChange={onChange}
              placeholder="Senior UX Designer"
            />
          </div>
          <div className={styles.inputGroup}>
            <label>Company</label>
            <input
              type="text"
              id="company"
              value={data.company}
              onChange={onChange}
              placeholder="Design Studio Inc."
            />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.inputGroup}>
            <label>Start Date</label>
            <input
              type="text"
              id="startDate"
              value={data.startDate}
              onChange={onChange}
              placeholder="Jan 2020"
            />
          </div>
          <div className={styles.inputGroup}>
            <label>End Date</label>
            <input
              type="text"
              id="endDate"
              value={data.endDate}
              onChange={onChange}
              placeholder="Present"
            />
          </div>
        </div>
        <div className={styles.fullWidth}>
          <div className={styles.inputGroup}>
            <label>Key Responsibilities / Achievements</label>
            <textarea
              id="workDesc"
              rows="2"
              value={data.workDesc}
              onChange={onChange}
              placeholder="Led product redesign increasing engagement by 35%..."
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
