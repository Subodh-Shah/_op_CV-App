const Education = ({ data, onChange, onAdd, onRemove, styles }) => {
  return (
    <div className={styles.formSection}>
      <div className={styles.sectionHeader}>🎓 Academic Background</div>
      
      {data.map((edu) => (
        <div key={edu.id} className={styles.arrayGroupCard}>
          <button type="button" className={styles.btnRemoveItem} onClick={() => onRemove(edu.id)}>✕</button>
          
          <div className={styles.row} style={{ marginBottom: "1rem" }}>
            <div className={styles.inputGroup}>
              <label>Degree / Qualification</label>
              <input type="text" className={styles.inputField} value={edu.degree} onChange={(e) => onChange(edu.id, 'degree', e.target.value)} placeholder="B.Sc. Computer Science" />
            </div>
            <div className={styles.inputGroup}>
              <label>Institution / Board</label>
              <input type="text" className={styles.inputField} value={edu.institution} onChange={(e) => onChange(edu.id, 'institution', e.target.value)} placeholder="Kailali Multiple Campus" />
            </div>
          </div>

          <div className={styles.inputGroup} style={{ marginBottom: "1rem" }}>
            <label>Year of Graduation</label>
            <input type="text" className={styles.inputField} value={edu.gradYear} onChange={(e) => onChange(edu.id, 'gradYear', e.target.value)} placeholder="2026" />
          </div>

          <div className={styles.inputGroup}>
            <label>Academics Particulars (Optional)</label>
            <textarea className={styles.inputField} value={edu.eduDetails} onChange={(e) => onChange(edu.id, 'eduDetails', e.target.value)} placeholder="Specialized in Compiler Construction, Cryptography. CGPA: 3.9" />
          </div>
        </div>
      ))}

      <button type="button" className={styles.btnAddItem} onClick={onAdd}>
        ➕ Append Education Node
      </button>
    </div>
  );
};

export default Education;