import { useState, useEffect } from "react";
import styles from "./styles/CVForm.module.css";
import PersonalInfo from "./PersonalInfo";
import WorkExperience from "./WorkExperience";
import Education from "./Education";
import SkillsLanguages from "./SkillsLanguages";
import AdditionalInfo from "./AdditionalInfo";

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
  const [formData, setFormData] = useState(() => {
    const savedForm = localStorage.getItem("cvFormDataSync");
    if (savedForm) {
      try { return JSON.parse(savedForm); } catch (e) { console.error(e); }
    }
    return initialFormState;
  });

  useEffect(() => {
    localStorage.setItem("cvFormDataSync", JSON.stringify(formData));
  }, [formData]);

  const handleFlatChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleArrayChange = (section, id, field, value) => {
    setFormData((prev) => ({
      ...prev,
      [section]: prev[section].map((item) =>
        item.id === id ? { ...item, [field]: value } : item
      ),
    }));
  };

  const addArrayItem = (section, template) => {
    setFormData((prev) => ({
      ...prev,
      [section]: [...prev[section], { id: generateId(), ...template }],
    }));
  };

  const removeArrayItem = (section, id) => {
    setFormData((prev) => ({
      ...prev,
      [section]: prev[section].filter((item) => item.id !== id),
    }));
  };

  const resetForm = () => {
    if (window.confirm("Are you sure you want to clear your data?")) {
      setFormData(initialFormState);
      localStorage.removeItem("cvFormDataSync");
    }
  };

  const formatDate = (dateVal) => {
    if (!dateVal) return "";
    const d = new Date(dateVal);
    return isNaN(d.getTime()) ? dateVal : d.toLocaleDateString(undefined, { year: "numeric", month: "short" });
  };

  return (
    <div className={styles.splitLayout}>
      
      {/* LEFT INPUT SECTION */}
      <div className={styles.sidebar}>
        <div className={styles.header}>
          <h1>📄 Interactive CV Engine</h1>
          <p>Changes render in real-time onto the document template.</p>
        </div>

        <div className={styles.form}>
          <PersonalInfo data={formData} onChange={handleFlatChange} styles={styles} />
          
          <WorkExperience 
            data={formData.workExperience} 
            onChange={(id, field, value) => handleArrayChange('workExperience', id, field, value)}
            onAdd={() => addArrayItem('workExperience', { jobTitle: "", company: "", startDate: "", endDate: "", workDesc: "" })}
            onRemove={(id) => removeArrayItem('workExperience', id)}
            styles={styles}
          />
          
          <Education 
            data={formData.education} 
            onChange={(id, field, value) => handleArrayChange('education', id, field, value)}
            onAdd={() => addArrayItem('education', { degree: "", institution: "", gradYear: "", eduDetails: "" })}
            onRemove={(id) => removeArrayItem('education', id)}
            styles={styles}
          />
          
          <SkillsLanguages data={formData} onChange={handleFlatChange} styles={styles} />
          <AdditionalInfo data={formData} onChange={handleFlatChange} styles={styles} />
        </div>

        <div className={styles.stickyActions}>
          <button type="button" className={styles.btnReset} onClick={resetForm}>
            🗑️ Wipe & Reset Form Data
          </button>
        </div>
      </div>

      {/* RIGHT REAL-TIME CANVAS */}
      <div className={styles.previewContainer}>
        <div className={styles.previewArea}>
          <div className={styles.previewHeader}>
            <h3>Live Document Frame</h3>
            <small>Standard A4 Layout</small>
          </div>
          
          <div className={styles.previewCard}>
            {/* Header Identity Block */}
            <div>
              <div className={styles.previewName}>
                {formData.fullName || <span className={styles.emptyMessage}>Your Full Name</span>}
              </div>
              <div className={styles.previewSub}>
                {formData.email && <span>✉️ {formData.email} &nbsp;|&nbsp; </span>}
                {formData.phone && <span>📞 {formData.phone} &nbsp;|&nbsp; </span>}
                {formData.location && <span>📍 {formData.location}</span>}
                {formData.dob && <span> &nbsp;|&nbsp; 🎂 {formatDate(formData.dob)}</span>}
                {formData.portfolio && (
                  <div>
                    🔗 <a href={formData.portfolio} target="_blank" rel="noreferrer" style={{ color: "#0d9488" }}>{formData.portfolio}</a>
                  </div>
                )}
              </div>
            </div>

            {/* Profile Statement */}
            <div className={styles.previewSection}>
              <h2>Profile Summary</h2>
              <div className={styles.previewText}>
                {formData.summary || <span className={styles.emptyMessage}>Brief statement summarizing your engineering expertise...</span>}
              </div>
            </div>

            {/* Employment History */}
            <div className={styles.previewSection}>
              <h2>Work Experience</h2>
              {formData.workExperience.some(w => w.jobTitle || w.company) ? (
                formData.workExperience.map((work) => (
                  (work.jobTitle || work.company) && (
                    <div key={work.id} className={styles.workBox}>
                      <div className={styles.workMetaLine}>
                        <div>
                          <span className={styles.workTitle}>{work.jobTitle || "Role Title"}</span>
                          <span className={styles.workCompany}> — {work.company || "Company"}</span>
                        </div>
                        <span className={styles.workDates}>
                          {work.startDate || "Start"} — {work.endDate || "Present"}
                        </span>
                      </div>
                      {work.workDesc && <div className={styles.previewText}>{work.workDesc}</div>}
                    </div>
                  )
                ))
              ) : (
                <span className={styles.emptyMessage}>No experience records mapped.</span>
              )}
            </div>

            {/* Academic History */}
            <div className={styles.previewSection}>
              <h2>Education</h2>
              {formData.education.some(e => e.degree || e.institution) ? (
                formData.education.map((edu) => (
                  (edu.degree || edu.institution) && (
                    <div key={edu.id} className={styles.workBox}>
                      <div className={styles.workMetaLine}>
                        <div>
                          <span className={styles.workTitle}>{edu.degree || "Degree Standard"}</span>
                          <span className={styles.workCompany}> — {edu.institution || "Institution"}</span>
                        </div>
                        <span className={styles.workDates}>
                          {edu.gradYear ? `Graduated: ${edu.gradYear}` : ""}
                        </span>
                      </div>
                      {edu.eduDetails && <div className={styles.previewText}>{edu.eduDetails}</div>}
                    </div>
                  )
                ))
              ) : (
                <span className={styles.emptyMessage}>No formal education items listed.</span>
              )}
            </div>

            {/* Skill Tags Layer */}
            <div className={styles.previewSection}>
              <h2>Core Skills</h2>
              <div className={styles.skillTagsContainer}>
                {formData.skills.trim() ? (
                  formData.skills.split(",").map((s) => s.trim()).filter(Boolean).map((skill, i) => (
                    <span key={i} className={styles.skillTag}>{skill}</span>
                  ))
                ) : (
                  <span className={styles.emptyMessage}>Add comma-separated skills...</span>
                )}
              </div>
            </div>

            {/* Linguistic Breakdown */}
            <div className={styles.previewSection}>
              <h2>Languages</h2>
              <div className={styles.previewText}>
                {formData.languages || <span className={styles.emptyMessage}>Languages listed here...</span>}
              </div>
            </div>

            {/* Optional Attachments block */}
            {(formData.certifications || formData.interests) && (
              <>
                {formData.certifications && (
                  <div className={styles.previewSection}>
                    <h2>Certifications & Endorsements</h2>
                    <div className={styles.previewText}>{formData.certifications}</div>
                  </div>
                )}
                {formData.interests && (
                  <div className={styles.previewSection}>
                    <h2>Interests & Focus Areas</h2>
                    <div className={styles.previewText}>{formData.interests}</div>
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