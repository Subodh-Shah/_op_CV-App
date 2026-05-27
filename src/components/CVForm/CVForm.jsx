import { useState, useEffect } from "react";
import styles from "./styles/CVForm.module.css";
import PersonalInfo from "./PersonalInfo";
import WorkExperience from "./WorkExperience";
import Education from "./Education";
import SkillsLanguages from "./SkillsLanguages";
import AdditionalInfo from "./AdditionalInfo";

const generateId = () => crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).substring(2, 9);

const exampleFormState = {
  fullName: "Roshan Bhatta",
  email: "roshan.bhatta@email.com",
  phone: "+977-9801234567",
  dob: "2003-05-15",
  location: "Dhangadhi, Nepal",
  portfolio: "https://github.com/roshan-bhatta",
  summary: "Highly motivated Full-Stack Engineer specializing in the MERN development ecosystem. Experienced in building high-fidelity web platforms, constructing RESTful APIs, and optimizing database management workflows.",
  workExperience: [
    { id: "w-1", jobTitle: "Junior Full-Stack Developer", company: "Aloft Technology Hub", startDate: "Jun 2025", endDate: "Present", workDesc: "Architected scalable backend routes utilizing Node.js, Express, and MongoDB instances.\nDesigned fluid, optimized user interfaces with React and corporate Tailwind modules." },
  ],
  education: [
    { id: "e-1", degree: "B.Sc. in Computer Science & IT", institution: "Far-Western University Campus", gradYear: "2026", eduDetails: "Concentration in Compiler Design, Practical Cryptography, and Advanced Network Infrastructures." },
  ],
  skills: "MongoDB, Express.js, React, Node.js, JavaScript, Tailwind CSS, Git, Linux, RESTful Architecture",
  languages: "English (Professional Working), Nepali (Native)",
  certifications: "AWS Certified Cloud Practitioner (2025)",
  interests: "Open-source development pipelines, system performance automation scripts",
};

const emptyFormState = {
  fullName: "", email: "", phone: "", dob: "", location: "", portfolio: "", summary: "",
  workExperience: [{ id: generateId(), jobTitle: "", company: "", startDate: "", endDate: "", workDesc: "" }],
  education: [{ id: generateId(), degree: "", institution: "", gradYear: "", eduDetails: "" }],
  skills: "", languages: "", certifications: "", interests: "",
};

const CVForm = () => {
  const [activeSection, setActiveSection] = useState("personal");
  const [formData, setFormData] = useState(() => {
    const savedForm = localStorage.getItem("cvFormDataBounded");
    if (savedForm) {
      try { return JSON.parse(savedForm); } catch (e) { console.error(e); }
    }
    return exampleFormState;
  });

  useEffect(() => {
    localStorage.setItem("cvFormDataBounded", JSON.stringify(formData));
  }, [formData]);

  const toggleSection = (sectionName) => {
    setActiveSection(activeSection === sectionName ? null : sectionName);
  };

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

  const loadExampleData = () => {
    if (window.confirm("Replace current values with standard template examples?")) {
      setFormData(exampleFormState);
    }
  };

  const wipeToEmpty = () => {
    if (window.confirm("Wipe all input frames clean?")) {
      setFormData(emptyFormState);
    }
  };

  const formatDate = (dateVal) => {
    if (!dateVal) return "";
    const d = new Date(dateVal);
    return isNaN(d.getTime()) ? dateVal : d.toLocaleDateString(undefined, { year: "numeric", month: "short" });
  };

  return (
    <div className={styles.splitLayout}>
      
      <div className={styles.sidebar}>
        <div className={styles.header}>
          <h1>📄 Interactive CV Canvas</h1>
          <p>Real-time updates mapped to a single window workspace.</p>
        </div>

        <div className={styles.formScrollArea}>
          
          <div className={`${styles.accordionPanel} ${activeSection === "personal" ? styles.panelActive : ""}`}>
            <button type="button" className={styles.accordionHeader} onClick={() => toggleSection("personal")}>
              <span>👤 Personal Particulars</span>
              <span>{activeSection === "personal" ? "▲" : "▼"}</span>
            </button>
            <div className={styles.accordionContent}>
              <PersonalInfo data={formData} onChange={handleFlatChange} styles={styles} />
            </div>
          </div>

          <div className={`${styles.accordionPanel} ${activeSection === "work" ? styles.panelActive : ""}`}>
            <button type="button" className={styles.accordionHeader} onClick={() => toggleSection("work")}>
              <span>💼 Employment History</span>
              <span>{activeSection === "work" ? "▲" : "▼"}</span>
            </button>
            <div className={styles.accordionContent}>
              <WorkExperience 
                data={formData.workExperience} 
                onChange={(id, field, value) => handleArrayChange('workExperience', id, field, value)}
                onAdd={() => addArrayItem('workExperience', { jobTitle: "", company: "", startDate: "", endDate: "", workDesc: "" })}
                onRemove={(id) => removeArrayItem('workExperience', id)}
                styles={styles}
              />
            </div>
          </div>

          <div className={`${styles.accordionPanel} ${activeSection === "education" ? styles.panelActive : ""}`}>
            <button type="button" className={styles.accordionHeader} onClick={() => toggleSection("education")}>
              <span>🎓 Education & Credentials</span>
              <span>{activeSection === "education" ? "▲" : "▼"}</span>
            </button>
            <div className={styles.accordionContent}>
              <Education 
                data={formData.education} 
                onChange={(id, field, value) => handleArrayChange('education', id, field, value)}
                onAdd={() => addArrayItem('education', { degree: "", institution: "", gradYear: "", eduDetails: "" })}
                onRemove={(id) => removeArrayItem('education', id)}
                styles={styles}
              />
            </div>
          </div>

          <div className={`${styles.accordionPanel} ${activeSection === "skills" ? styles.panelActive : ""}`}>
            <button type="button" className={styles.accordionHeader} onClick={() => toggleSection("skills")}>
              <span>🛠️ Skills & Languages</span>
              <span>{activeSection === "skills" ? "▲" : "▼"}</span>
            </button>
            <div className={styles.accordionContent}>
              <SkillsLanguages data={formData} onChange={handleFlatChange} styles={styles} />
            </div>
          </div>

          <div className={`${styles.accordionPanel} ${activeSection === "additional" ? styles.panelActive : ""}`}>
            <button type="button" className={styles.accordionHeader} onClick={() => toggleSection("additional")}>
              <span>🏅 Additional Data Fields</span>
              <span>{activeSection === "additional" ? "▲" : "▼"}</span>
            </button>
            <div className={styles.accordionContent}>
              <AdditionalInfo data={formData} onChange={handleFlatChange} styles={styles} />
            </div>
          </div>

        </div>

        <div className={styles.stickyActions}>
          <button type="button" className={`${styles.btnAction} ${styles.btnExample}`} onClick={loadExampleData}>
            ✨ Load Sample Template
          </button>
          <button type="button" className={`${styles.btnAction} ${styles.btnReset}`} onClick={wipeToEmpty}>
            🗑️ Clear Template
          </button>
        </div>
      </div>

      <div className={styles.previewContainer}>
        <div className={styles.previewArea}>
          <div className={styles.previewHeader}>
            <h3>Live Document Frame</h3>
            <small>Standard A4 Print Spec</small>
          </div>
          
          <div className={styles.previewCard}>
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

            <div className={styles.previewSection}>
              <h2>Profile Summary</h2>
              <div className={styles.previewText}>
                {formData.summary || <span className={styles.emptyMessage}>Brief statement summarizing your engineering expertise...</span>}
              </div>
            </div>

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

            <div className={styles.previewSection}>
              <h2>Languages</h2>
              <div className={styles.previewText}>
                {formData.languages || <span className={styles.emptyMessage}>Languages listed here...</span>}
              </div>
            </div>

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