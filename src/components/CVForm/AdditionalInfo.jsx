const AdditionalInfo = ({ data, onChange, styles }) => {
  return (
    <div className={styles.formSection}>
      <div className={styles.sectionHeader}>🏅 Auxiliary Channels</div>
      
      <div className={styles.inputGroup}>
        <label htmlFor="certifications">Certifications & Accreditations</label>
        <textarea id="certifications" className={styles.inputField} value={data.certifications} onChange={onChange} placeholder="AWS Certified Cloud Practitioner (2025)" />
      </div>

      <div className={styles.inputGroup}>
        <label htmlFor="interests">Interests & Pursuits</label>
        <textarea id="interests" className={styles.inputField} value={data.interests} onChange={onChange} placeholder="Open-source automation scripting, competitive programming" />
      </div>
    </div>
  );
};

export default AdditionalInfo;