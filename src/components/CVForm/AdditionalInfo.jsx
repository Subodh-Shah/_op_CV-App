const AdditionalInfo = ({ data, onChange, styles }) => {
  return (
    <>
      <div className={styles.inputGroup}>
        <label htmlFor="certifications">Certifications & Accreditations</label>
        <textarea id="certifications" className={styles.inputField} value={data.certifications} onChange={onChange} placeholder="AWS Certified Practitioner..." />
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="interests">Interests & Pursuits</label>
        <textarea id="interests" className={styles.inputField} value={data.interests} onChange={onChange} placeholder="Competitive programming, open source..." />
      </div>
    </>
  );
};
export default AdditionalInfo;