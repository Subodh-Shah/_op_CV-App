const WorkExperience = ({ data, onChange, onAdd, onRemove, styles }) => {
  return (
    <div className={styles.formSection}>
      <div className={styles.sectionHeader}>💼 Professional Experience</div>
      
      {data.map((work) => (
        <div key={work.id} className={styles.arrayGroupCard}>
          <button type="button" className={styles.btnRemoveItem} onClick={() => onRemove(work.id)}>✕</button>
          
          <div className={styles.row} style={{ marginBottom: "1rem" }}>
            <div className={styles.inputGroup}>
              <label>Job Designation</label>
              <input type="text" className={styles.inputField} value={work.jobTitle} onChange={(e) => onChange(work.id, 'jobTitle', e.target.value)} placeholder="Software Engineer" />
            </div>
            <div className={styles.inputGroup}>
              <label>Organization</label>
              <input type="text" className={styles.inputField} value={work.company} onChange={(e) => onChange(work.id, 'company', e.target.value)} placeholder="Tech Corp" />
            </div>
          </div>

          <div className={styles.row} style={{ marginBottom: "1rem" }}>
            <div className={styles.inputGroup}>
              <label>Timeline From</label>
              <input type="text" className={styles.inputField} value={work.startDate} onChange={(e) => onChange(work.id, 'startDate', e.target.value)} placeholder="Jan 2024" />
            </div>
            <div className={styles.inputGroup}>
              <label>Timeline To</label>
              <input type="text" className={styles.inputField} value={work.endDate} onChange={(e) => onChange(work.id, 'endDate', e.target.value)} placeholder="Present" />
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label>Core Responsibilities</label>
            <textarea className={styles.inputField} value={work.workDesc} onChange={(e) => onChange(work.id, 'workDesc', e.target.value)} placeholder="Developed core architectural modules using MERN Stack..." />
          </div>
        </div>
      ))}

      <button type="button" className={styles.btnAddItem} onClick={onAdd}>
        ➕ Append Experience Node
      </button>
    </div>
  );
};

export default WorkExperience;