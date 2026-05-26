import { useState } from "react";
import styles from "./styles/CVForm.module.css";
import PersonalInfo from "./PersonalInfo";
import WorkExperience from "./WorkExperience";
import Education from "./Education";
import SkillsLanguages from "./SkillsLanguages";
import AdditionalInfo from "./AdditionalInfo";

const CVForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    dob: "",
    location: "",
    portfolio: "",
    summary: "",
    jobTitle: "",
    company: "",
    startDate: "",
    endDate: "",
    workDesc: "",
    degree: "",
    institution: "",
    gradYear: "",
    eduDetails: "",
    skills: "",
    languages: "",
    certifications: "",
    interests: "",
  });

  const [previewHtml, setPreviewHtml] = useState(
    `<div class="${styles.emptyMessage}" style="text-align:center; padding:1rem;">✨ Your CV preview will appear here.<br>Fill the form and click "Generate".</div>`,
  );

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  // Helper: escape HTML
  const escapeHtml = (str) => {
    if (!str) return "";
    return str.replace(/[&<>]/g, (m) => {
      if (m === "&") return "&amp;";
      if (m === "<") return "&lt;";
      if (m === ">") return "&gt;";
      return m;
    });
  };

  const formatSkills = (skillStr) => {
    if (!skillStr.trim())
      return `<span class="${styles.emptyMessage}">— Not specified —</span>`;
    const items = skillStr
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);
    if (items.length === 0)
      return `<span class="${styles.emptyMessage}">—</span>`;
    return items
      .map(
        (item) => `<span class="${styles.skillTag}">${escapeHtml(item)}</span>`,
      )
      .join("");
  };

  const formatDate = (dateVal) => {
    if (!dateVal) return "";
    try {
      const d = new Date(dateVal);
      if (!isNaN(d.getTime()))
        return d.toLocaleDateString(undefined, {
          year: "numeric",
          month: "short",
          day: "numeric",
        });
    } catch {
      return dateVal;
    }
    return dateVal;
  };

  const generatePreview = () => {
    const {
      fullName,
      email,
      phone,
      dob,
      location,
      portfolio,
      summary,
      jobTitle,
      company,
      startDate,
      endDate,
      workDesc,
      degree,
      institution,
      gradYear,
      eduDetails,
      skills,
      languages,
      certifications,
      interests,
    } = formData;

    const missing = [];
    if (!fullName.trim()) missing.push("Full Name");
    if (!email.trim()) missing.push("Email");

    let html = "";

    // Header
    html += `<div style="margin-bottom:1.2rem;">`;
    html += `<div class="${styles.previewName}">${fullName ? escapeHtml(fullName) : '<span class="' + styles.emptyMessage + '">[Full name not provided]</span>'}</div>`;
    html += `<div class="${styles.previewSub}">`;
    if (email) html += `📧 ${escapeHtml(email)} &nbsp;|&nbsp; `;
    if (phone) html += `📞 ${escapeHtml(phone)} &nbsp;|&nbsp; `;
    if (location) html += `📍 ${escapeHtml(location)} `;
    if (dob) html += `<br>🎂 ${formatDate(dob)}`;
    if (portfolio)
      html += `<br>🔗 <a href="${escapeHtml(portfolio)}" target="_blank" style="color:#1f5e6b;">${escapeHtml(portfolio)}</a>`;
    html += `</div></div>`;

    // Summary
    html += `<div class="${styles.previewSection}"><strong>📌 Professional Summary</strong><div class="${styles.previewText}">${summary ? escapeHtml(summary) : '<span class="' + styles.emptyMessage + '">No summary added.</span>'}</div></div>`;

    // Work experience
    html += `<div class="${styles.previewSection}"><strong>💼 Work Experience</strong>`;
    if (jobTitle || company || startDate || endDate || workDesc) {
      html += `<div class="${styles.workBox}">`;
      if (jobTitle)
        html += `<div class="${styles.workTitle}">${escapeHtml(jobTitle)}</div>`;
      if (company)
        html += `<div class="${styles.workCompany}">${escapeHtml(company)}</div>`;
      if (startDate || endDate)
        html += `<div class="${styles.workDates}">${escapeHtml(startDate)} — ${escapeHtml(endDate)}</div>`;
      if (workDesc)
        html += `<div class="${styles.previewText}" style="margin-top:0.4rem;">${escapeHtml(workDesc)}</div>`;
      html += `</div>`;
    } else {
      html += `<span class="${styles.emptyMessage}">No work experience added.</span>`;
    }
    html += `</div>`;

    // Education
    html += `<div class="${styles.previewSection}"><strong>🎓 Education</strong>`;
    if (degree || institution || gradYear || eduDetails) {
      html += `<div style="margin-top:0.3rem;">`;
      if (degree) html += `<div><strong>${escapeHtml(degree)}</strong>`;
      if (institution) html += ` — ${escapeHtml(institution)}`;
      if (gradYear) html += ` (${escapeHtml(gradYear)})`;
      html += `</div>`;
      if (eduDetails)
        html += `<div class="${styles.previewText}" style="font-size:0.85rem;">${escapeHtml(eduDetails)}</div>`;
      html += `</div>`;
    } else {
      html += `<span class="${styles.emptyMessage}">No education details provided.</span>`;
    }
    html += `</div>`;

    // Skills
    html += `<div class="${styles.previewSection}"><strong>🛠️ Core Skills</strong><div style="margin-top:0.3rem;">${formatSkills(skills)}</div></div>`;
    html += `<div class="${styles.previewSection}"><strong>🗣️ Languages</strong><div class="${styles.previewText}">${languages ? escapeHtml(languages) : '<span class="' + styles.emptyMessage + '">Not specified</span>'}</div></div>`;

    if (certifications) {
      html += `<div class="${styles.previewSection}"><strong>🏅 Certifications & Awards</strong><div class="${styles.previewText}">${escapeHtml(certifications)}</div></div>`;
    }
    if (interests) {
      html += `<div class="${styles.previewSection}"><strong>🌟 Interests & Volunteering</strong><div class="${styles.previewText}">${escapeHtml(interests)}</div></div>`;
    }

    if (missing.length) {
      html += `<div class="${styles.warningNote}">⚠️ Missing required fields: ${missing.join(", ")} — please fill them.</div>`;
    }

    if (!fullName && !email && !summary && !jobTitle && !degree && !skills) {
      html = `<div class="${styles.emptyMessage}" style="text-align:center; padding:2rem;">✨ No data yet — fill the form and click "Generate".</div>`;
    }

    setPreviewHtml(html);
  };

  const resetForm = () => {
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      dob: "",
      location: "",
      portfolio: "",
      summary: "",
      jobTitle: "",
      company: "",
      startDate: "",
      endDate: "",
      workDesc: "",
      degree: "",
      institution: "",
      gradYear: "",
      eduDetails: "",
      skills: "",
      languages: "",
      certifications: "",
      interests: "",
    });
    setPreviewHtml(
      `<div class="${styles.emptyMessage}" style="text-align:center; padding:1rem;">✨ Form reset. Fill and generate preview.</div>`,
    );
  };

  const clearPreview = () => {
    setPreviewHtml(
      `<div class="${styles.emptyMessage}" style="text-align:center; padding:1rem;">🧹 Preview cleared. Regenerate to see updated CV.</div>`,
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <div className={styles.header}>
          <h1>📄 CV Builder</h1>
          <p>Fill in your details, then generate a professional CV preview.</p>
        </div>

        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
          <PersonalInfo data={formData} onChange={handleChange} />
          <WorkExperience data={formData} onChange={handleChange} />
          <Education data={formData} onChange={handleChange} />
          <SkillsLanguages data={formData} onChange={handleChange} />
          <AdditionalInfo data={formData} onChange={handleChange} />

          <div className={styles.buttonGroup}>
            <button
              type="button"
              className={`${styles.btn} ${styles.btnPrimary}`}
              onClick={generatePreview}
            >
              ✨ Generate CV Preview
            </button>
            <button
              type="button"
              className={`${styles.btn} ${styles.btnSecondary}`}
              onClick={resetForm}
            >
              🗑️ Reset Form
            </button>
            <button
              type="button"
              className={`${styles.btn} ${styles.btnClear}`}
              onClick={clearPreview}
            >
              🧹 Clear Preview
            </button>
          </div>

          <div className={styles.previewArea}>
            <div className={styles.previewHeader}>
              <h3>📋 CV Preview</h3>
              <small>Fill & click "Generate"</small>
            </div>
            <div
              className={styles.previewCard}
              dangerouslySetInnerHTML={{ __html: previewHtml }}
            />
          </div>
        </form>

        <div className={styles.footer}>
          All fields optional except Full Name & Email – preview updates after
          generation.
        </div>
      </div>
    </div>
  );
};

export default CVForm;
