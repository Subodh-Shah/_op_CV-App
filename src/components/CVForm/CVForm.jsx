import { useState } from "react";
import styles from "./styles/CVForm.module.css";
import PersonalInfo from "./PersonalInfo";
import WorkExperience from "./WorkExperience";
import Education from "./Education";
import SkillsLanguages from "./SkillsLanguages";
import AdditionalInfo from "./AdditionalInfo";

// Helper for generating unique IDs
const generateId = () => crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).substring(2, 9);

const initialFormState = {
  fullName: "",
  email: "",
  phone: "",
  dob: "",
  location: "",
  portfolio: "",
  summary: "",
  workExperience: [
    { id: generateId(), jobTitle: "", company: "", startDate: "", endDate: "", workDesc: "" },
  ],
  education: [
    { id: generateId(), degree: "", institution: "", gradYear: "", eduDetails: "" },
  ],
  skills: "",
  languages: "",
  certifications: "",
  interests: "",
};

const CVForm = () => {
  const [formData, setFormData] = useState(initialFormState);
  const [previewData, setPreviewData] = useState(null); // null means preview hasn't been generated yet

  // Handle flat fields (PersonalInfo, Skills, etc.)
  const handleFlatChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  // Handle array fields (Work & Education)
  const handleArrayChange = (section, id, field, value) => {
    setFormData((prev) => ({
      ...prev,
      [section]: prev[section].map((item) =>
        item.id === id ? { ...item, [field]: value } : item
      ),
    }));
  };

  // Add new block to arrays
  const addArrayItem = (section, template) => {
    setFormData((prev) => ({
      ...prev,
      [section]: [...prev[section], { id: generateId(), ...template }],
    }));
  };

  // Remove block from arrays
  const removeArrayItem = (section, id) => {
    setFormData((prev) => ({
      ...prev,
      [section]: prev[section].filter((item) => item.id !== id),
    }));
  };

  const generatePreview = () => {
    // Take a snapshot of the current form data to render in the preview box
    setPreviewData({ ...formData });
  };

  const resetForm = () => {
    setFormData(initialFormState);
    setPreviewData(null);
  };

  const clearPreview = () => {
    setPreviewData(null);
  };

  const formatDate = (dateVal) => {
    if (!dateVal) return "";
    try {
      const d = new Date(dateVal);
      if (!isNaN(d.getTime())) {
        return d.toLocaleDateString(undefined, {
          year: "numeric",
          month: "short",
          day: "numeric",
        });
      }
    } catch {
      return dateVal;
    }
    return dateVal;
  };

  // Extract skills into an array for rendering tags
  const renderSkills = (skillsStr) => {
    if (!skillsStr.trim()) return <span className={styles.emptyMessage}>— Not specified —</span>;
    const skillsList = skillsStr.split(",").map((s) => s.trim()).filter(Boolean);
    
    if (skillsList.length === 0) return <span className={styles.emptyMessage}>—</span>;
    
    return skillsList.map((skill, index) => (
      <span key={index} className={styles.skillTag}>
        {skill}
      </span>
    ));
  };

 return (
    <div className={styles.splitLayout}>
      
      {/* ================= LEFT PANE: FORM ================= */}
      <div className={styles.sidebar}>
        <div className={styles.header}>
          <h1>📄 CV Builder</h1>
          <p>Fill in your details, then generate a professional CV preview.</p>
        </div>

        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
          <PersonalInfo data={formData} onChange={handleFlatChange} />
          
          <WorkExperience 
            data={formData.workExperience} 
            onChange={(id, field, value) => handleArrayChange('workExperience', id, field, value)}
            onAdd={() => addArrayItem('workExperience', { jobTitle: "", company: "", startDate: "", endDate: "", workDesc: "" })}
            onRemove={(id) => removeArrayItem('workExperience', id)}
          />
          
          <Education 
            data={formData.education} 
            onChange={(id, field, value) => handleArrayChange('education', id, field, value)}
            onAdd={() => addArrayItem('education', { degree: "", institution: "", gradYear: "", eduDetails: "" })}
            onRemove={(id) => removeArrayItem('education', id)}
          />
          
          <SkillsLanguages data={formData} onChange={handleFlatChange} />
          <AdditionalInfo data={formData} onChange={handleFlatChange} />
        </form>

        {/* Action Buttons at the bottom of the sidebar */}
        <div className={styles.buttonGroup}>
          <button type="button" className={`${styles.btn} ${styles.btnPrimary}`} onClick={generatePreview}>
            ✨ Generate CV
          </button>
          <button type="button" className={`${styles.btn} ${styles.btnSecondary}`} onClick={resetForm}>
            🗑️ Reset
          </button>
          <button type="button" className={`${styles.btn} ${styles.btnClear}`} onClick={clearPreview}>
            🧹 Clear
          </button>
        </div>

        <div className={styles.footer}>
          All fields optional except Full Name & Email.
        </div>
      </div>

      {/* ================= RIGHT PANE: PREVIEW ================= */}
      <div className={styles.previewContainer}>
        <div className={styles.previewArea}>
          <div className={styles.previewHeader}>
            <h3>📋 Live Preview</h3>
            <small>A4 Format</small>
          </div>
          
          <div className={styles.previewCard}>
            {!previewData ? (
              <div className={styles.emptyMessage} style={{ textAlign: "center", padding: "4rem 2rem" }}>
                <h2>No Preview Generated</h2>
                <p>Fill out the form on the left and click "Generate CV" to see your document.</p>
              </div>
            ) : (
              <>
                {/* Missing Fields Warning */}
                {(!previewData.fullName || !previewData.email) && (
                  <div className={styles.warningNote} style={{ backgroundColor: "#fffbeb", color: "#92400e", padding: "0.5rem", borderRadius: "4px", marginBottom: "1rem" }}>
                    ⚠️ Missing required fields: {!previewData.fullName && "Full Name"} {!previewData.fullName && !previewData.email && "&"} {!previewData.email && "Email"}
                  </div>
                )}

                {/* Header Section */}
                <div style={{ marginBottom: "1.2rem" }}>
                  <div className={styles.previewName}>
                    {previewData.fullName || <span className={styles.emptyMessage}>[Full name not provided]</span>}
                  </div>
                  <div className={styles.previewSub}>
                    {previewData.email && <span>📧 {previewData.email} &nbsp;|&nbsp; </span>}
                    {previewData.phone && <span>📞 {previewData.phone} &nbsp;|&nbsp; </span>}
                    {previewData.location && <span>📍 {previewData.location} </span>}
                    {previewData.dob && <><br />🎂 {formatDate(previewData.dob)}</>}
                    {previewData.portfolio && (
                      <>
                        <br />🔗 <a href={previewData.portfolio} target="_blank" rel="noreferrer" style={{ color: "#1f5e6b" }}>{previewData.portfolio}</a>
                      </>
                    )}
                  </div>
                </div>

                {/* Professional Summary */}
                <div className={styles.previewSection}>
                  <strong>📌 Professional Summary</strong>
                  <div className={styles.previewText}>
                    {previewData.summary || <span className={styles.emptyMessage}>No summary added.</span>}
                  </div>
                </div>

                {/* Work Experience */}
                <div className={styles.previewSection}>
                  <strong>💼 Work Experience</strong>
                  {previewData.workExperience.some(work => work.jobTitle || work.company) ? (
                    previewData.workExperience.map((work) => (
                      (work.jobTitle || work.company) && (
                        <div key={work.id} className={styles.workBox}>
                          <div>
                            {work.jobTitle && <span className={styles.workTitle}>{work.jobTitle}</span>}
                            {work.company && <span className={styles.workCompany}> — {work.company}</span>}
                            {(work.startDate || work.endDate) && (
                              <span className={styles.workDates}>{work.startDate} — {work.endDate}</span>
                            )}
                          </div>
                          {work.workDesc && (
                            <div className={styles.previewText} style={{ marginTop: "0.4rem" }}>
                              {work.workDesc}
                            </div>
                          )}
                        </div>
                      )
                    ))
                  ) : (
                    <span className={styles.emptyMessage}>No work experience added.</span>
                  )}
                </div>

                {/* Education */}
                <div className={styles.previewSection}>
                  <strong>🎓 Education</strong>
                  {previewData.education.some(edu => edu.degree || edu.institution) ? (
                    previewData.education.map((edu) => (
                      (edu.degree || edu.institution) && (
                        <div key={edu.id} className={styles.workBox}>
                          <div>
                            <span className={styles.workTitle}>{edu.degree}</span>
                            {edu.institution && <span className={styles.workCompany}> — {edu.institution}</span>}
                            {edu.gradYear && <span className={styles.workDates}> ({edu.gradYear})</span>}
                          </div>
                          {edu.eduDetails && (
                            <div className={styles.previewText} style={{ marginTop: "0.4rem" }}>
                              {edu.eduDetails}
                            </div>
                          )}
                        </div>
                      )
                    ))
                  ) : (
                    <span className={styles.emptyMessage}>No education details provided.</span>
                  )}
                </div>

                {/* Skills & Languages */}
                <div className={styles.previewSection}>
                  <strong>🛠️ Core Skills</strong>
                  <div style={{ marginTop: "0.3rem" }}>
                    {renderSkills(previewData.skills)}
                  </div>
                </div>
                
                <div className={styles.previewSection}>
                  <strong>🗣️ Languages</strong>
                  <div className={styles.previewText}>
                    {previewData.languages || <span className={styles.emptyMessage}>Not specified</span>}
                  </div>
                </div>

                {/* Optional Sections */}
                {previewData.certifications && (
                  <div className={styles.previewSection}>
                    <strong>🏅 Certifications & Awards</strong>
                    <div className={styles.previewText}>{previewData.certifications}</div>
                  </div>
                )}
                
                {previewData.interests && (
                  <div className={styles.previewSection}>
                    <strong>🌟 Interests & Volunteering</strong>
                    <div className={styles.previewText}>{previewData.interests}</div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default CVForm;