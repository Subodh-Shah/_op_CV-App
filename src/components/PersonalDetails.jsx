export default function PersonalDetails() {
  return (
    <>
      {console.log("personal details working")};
      <div class="form-section">
        <div class="section-title">👤 Personal Information</div>
        <div class="section-grid">
          <div class="input-group">
            <label>Full Name *</label>
            <input
              type="text"
              id="fullName"
              placeholder="e.g., Emma Rodriguez"
              required
            />
          </div>
          <div class="input-group">
            <label>Email Address *</label>
            <input
              type="email"
              id="email"
              placeholder="hello@example.com"
              required
            />
          </div>
          <div class="input-group">
            <label>Phone Number</label>
            <input type="tel" id="phone" placeholder="+1 234 567 8900" />
          </div>
          <div class="input-group">
            <label>Date of Birth</label>
            <input type="date" id="dob" />
          </div>
          <div class="input-group">
            <label>Location / City</label>
            <input type="text" id="location" placeholder="e.g., New York, NY" />
          </div>
          <div class="input-group">
            <label>LinkedIn / Portfolio</label>
            <input
              type="url"
              id="portfolio"
              placeholder="https://linkedin.com/in/yourname"
            />
          </div>
          <div class="input-group full-width">
            <label>
              Professional Summary{" "}
              <span class="optional">(short bio / objective)</span>
            </label>
            <textarea
              id="summary"
              placeholder="Detail-oriented professional with 5+ years of experience in ..."
            ></textarea>
          </div>
        </div>
      </div>
    </>
  );
}
