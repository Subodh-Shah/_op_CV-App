const PersonalInfo = ({ data, onChange, styles }) => {
  return (
    <>
      <div className={styles.inputGroup}>
        <label htmlFor="fullName">Full Name</label>
        <input type="text" id="fullName" className={styles.inputField} value={data.fullName} onChange={onChange} placeholder="John Doe" />
      </div>
      <div className={styles.row}>
        <div className={styles.inputGroup}>
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" className={styles.inputField} value={data.email} onChange={onChange} placeholder="john@example.com" />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="phone">Phone Line</label>
          <input type="tel" id="phone" className={styles.inputField} value={data.phone} onChange={onChange} placeholder="+977..." />
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.inputGroup}>
          <label htmlFor="location">Location</label>
          <input type="text" id="location" className={styles.inputField} value={data.location} onChange={onChange} placeholder="City, Country" />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="dob">Date of Birth</label>
          <input type="date" id="dob" className={styles.inputField} value={data.dob} onChange={onChange} />
        </div>
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="portfolio">Portfolio URL</label>
        <input type="url" id="portfolio" className={styles.inputField} value={data.portfolio} onChange={onChange} placeholder="https://yourportfolio.dev" />
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="summary">Executive Summary</label>
        <textarea id="summary" className={styles.inputField} value={data.summary} onChange={onChange} placeholder="Driven developer with experiences..." />
      </div>
    </>
  );
};
export default PersonalInfo;