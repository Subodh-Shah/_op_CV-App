import styles from "./styles/CVForm.module.css";

const WorkExperience = ({ data, onChange, onAdd, onRemove }) => {
  return (
    <div className={styles.section}>
      <div className={styles.sectionTitle}>💼 Work Experience</div>
      <div className={styles.formGrid}>
        
        {data.map((item, index) => (
          <div 
            key={item.id} 
            style={{ 
              marginBottom: index !== data.length - 1 ? '1.5rem' : '0', 
              paddingBottom: index !== data.length - 1 ? '1.5rem' : '0', 
              borderBottom: index !== data.length - 1 ? '1px solid #e2e8f0' : 'none' 
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <h4 style={{ margin: 0, color: '#1f5e6b', fontSize: '0.95rem' }}>Experience #{index + 1}</h4>
              {data.length > 1 && (
                <button
                  type="button"
                  className={`${styles.btn} ${styles.btnClear}`}
                  style={{ padding: '0.3rem 0.8rem', fontSize: '0.75rem' }}
                  onClick={() => onRemove(item.id)}
                >
                  🗑️ Remove
                </button>
              )}
            </div>

            <div className={styles.row}>
              <div className={styles.inputGroup}>
                <label>Job Title</label>
                <input
                  type="text"
                  value={item.jobTitle}
                  onChange={(e) => onChange(item.id, "jobTitle", e.target.value)}
                  placeholder="Senior UX Designer"
                />
              </div>
              <div className={styles.inputGroup}>
                <label>Company</label>
                <input
                  type="text"
                  value={item.company}
                  onChange={(e) => onChange(item.id, "company", e.target.value)}
                  placeholder="Design Studio Inc."
                />
              </div>
            </div>
            
            <div className={styles.row}>
              <div className={styles.inputGroup}>
                <label>Start Date</label>
                <input
                  type="text"
                  value={item.startDate}
                  onChange={(e) => onChange(item.id, "startDate", e.target.value)}
                  placeholder="Jan 2020"
                />
              </div>
              <div className={styles.inputGroup}>
                <label>End Date</label>
                <input
                  type="text"
                  value={item.endDate}
                  onChange={(e) => onChange(item.id, "endDate", e.target.value)}
                  placeholder="Present"
                />
              </div>
            </div>
            
            <div className={styles.fullWidth}>
              <div className={styles.inputGroup}>
                <label>Key Responsibilities / Achievements</label>
                <textarea
                  rows="2"
                  value={item.workDesc}
                  onChange={(e) => onChange(item.id, "workDesc", e.target.value)}
                  placeholder="Led product redesign increasing engagement by 35%..."
                ></textarea>
              </div>
            </div>
          </div>
        ))}

        <div style={{ marginTop: '0.5rem' }}>
          <button
            type="button"
            className={`${styles.btn} ${styles.btnSecondary}`}
            onClick={onAdd}
          >
            ➕ Add Another Experience
          </button>
        </div>

      </div>
    </div>
  );
};

export default WorkExperience;