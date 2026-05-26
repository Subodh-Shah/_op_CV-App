import styles from "./styles/CVForm.module.css";

const AdditionalInfo = ({ data, onChange }) => {
  return (
    <div className={styles.section}>
      <div className={styles.sectionTitle}>🌟 Additional Information</div>
      <div className={styles.formGrid}>
        <div className={styles.fullWidth}>
          <div className={styles.inputGroup}>
            <label>Hobbies / Interests / Volunteering</label>
            <textarea
              id="interests"
              rows="2"
              value={data.interests}
              onChange={onChange}
              placeholder="Open source, chess, mentorship programs"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdditionalInfo;
