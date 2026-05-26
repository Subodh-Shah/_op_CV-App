import styles from "./styles/CVForm.module.css";

const PersonalInfo = ({ data, onChange }) => {
  return (
    <div className={styles.section}>
      <div className={styles.sectionTitle}>👤 Personal Information</div>
      <div className={styles.formGrid}>
        <div className={styles.row}>
          <div className={styles.inputGroup}>
            <label>Full Name *</label>
            <input
              type="text"
              id="fullName"
              value={data.fullName}
              onChange={onChange}
              placeholder="e.g., Emma Rodriguez"
            />
          </div>
          <div className={styles.inputGroup}>
            <label>Email *</label>
            <input
              type="email"
              id="email"
              value={data.email}
              onChange={onChange}
              placeholder="hello@example.com"
            />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.inputGroup}>
            <label>Phone</label>
            <input
              type="tel"
              id="phone"
              value={data.phone}
              onChange={onChange}
              placeholder="+1 234 567 8900"
            />
          </div>
          <div className={styles.inputGroup}>
            <label>Date of Birth</label>
            <input type="date" id="dob" value={data.dob} onChange={onChange} />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.inputGroup}>
            <label>Location</label>
            <input
              type="text"
              id="location"
              value={data.location}
              onChange={onChange}
              placeholder="New York, NY"
            />
          </div>
          <div className={styles.inputGroup}>
            <label>Portfolio / LinkedIn</label>
            <input
              type="url"
              id="portfolio"
              value={data.portfolio}
              onChange={onChange}
              placeholder="https://linkedin.com/in/..."
            />
          </div>
        </div>
        <div className={styles.fullWidth}>
          <div className={styles.inputGroup}>
            <label>Professional Summary</label>
            <textarea
              id="summary"
              rows="3"
              value={data.summary}
              onChange={onChange}
              placeholder="Detail-oriented professional with 5+ years of experience..."
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
