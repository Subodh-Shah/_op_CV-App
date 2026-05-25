import PersonalDetails from "./PersonalDetails.jsx";
import Education from "./Education.jsx";
import Experience from "./Experience.jsx";
export default function CvForm() {
  return (
    <div className="form-container">
      <h1>📄 CV Form · Fill & Preview</h1>
      <h3>Complete your professional profile </h3>
      <PersonalDetails />
      <Education />
      <Experience />
    </div>
  );
}
