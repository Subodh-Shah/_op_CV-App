import styles from "./styles/CVForm.module.css";

const Education = ({ data, onChange, onAdd, onRemove }) => {
  return (
    <div className={styles.section}>
      <div className={styles.sectionTitle}>🎓 Education</div>
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
              <h4 style={{ margin: 0, color: '#1f5e6b', fontSize: '0.95rem' }}>Education #{index + 1}</h4>
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
                <label>Degree</label>
                <input
                  type="text"
                  value={item.degree}
                  onChange={(e) => onChange(item.id, "degree", e.target.value)}
                  placeholder="B.Sc. Computer Science"
                />
              </div>
              <div className={styles.inputGroup}>
                <label>Institution</label>
                <input
                  type="text"
                  value={item.institution}
                  onChange={(e) => onChange(item.id, "institution", e.target.value)}
                  placeholder="University of Technology"
                />
              </div>
            </div>
            
            <div className={styles.row}>
              <div className={styles.inputGroup}>
                <label>Year of Graduation</label>
                <input
                  type="text"
                  value={item.gradYear}
                  onChange={(e) => onChange(item.id, "gradYear", e.target.value)}
                  placeholder="2021"
                />
              </div>
              <div className={styles.inputGroup}>
                <label>Additional Details</label>
                <input
                  type="text"
                  value={item.eduDetails}
                  onChange={(e) => onChange(item.id, "eduDetails", e.target.value)}
                  placeholder="Cum laude, relevant coursework..."
                />
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
            ➕ Add Another Degree
          </button>
        </div>

      </div>
    </div>
  );
};

export default Education;