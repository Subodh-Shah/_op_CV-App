import styles from "./styles/CVForm.module.css";

const Education = ({ data, onChange }) => {
  return (
    <div className={styles.section}>
      <div className={styles.sectionTitle}>🎓 Education</div>
      <div className={styles.formGrid}>
        <div className={styles.row}>
          <div className={styles.inputGroup}>
            <label>Degree</label>
            <input
              type="text"
              id="degree"
              value={data.degree}
              onChange={onChange}
              placeholder="B.Sc. Computer Science"
            />
          </div>
          <div className={styles.inputGroup}>
            <label>Institution</label>
            <input
              type="text"
              id="institution"
              value={data.institution}
              onChange={onChange}
              placeholder="University of Technology"
            />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.inputGroup}>
            <label>Year of Graduation</label>
            <input
              type="text"
              id="gradYear"
              value={data.gradYear}
              onChange={onChange}
              placeholder="2021"
            />
          </div>
          <div className={styles.inputGroup}>
            <label>Additional Details</label>
            <input
              type="text"
              id="eduDetails"
              value={data.eduDetails}
              onChange={onChange}
              placeholder="Cum laude, relevant coursework..."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
