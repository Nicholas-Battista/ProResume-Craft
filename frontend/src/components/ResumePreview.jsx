import React from "react";
import "../styles/ResumePreview.css";

function ResumePreview({ data }) {
  const { generalInfo, education, experience } = data;

  return (
    <div className="resume-preview">
      <div className="resume-header">
        <h1>{generalInfo.name || "John Doe"}</h1>
        <p>{generalInfo.email || "john.doe@example.com"}</p>
        <p>{generalInfo.phone || "(555) 555-5555"}</p>
        <p>{generalInfo.address || "123 Main St, Anytown, USA"}</p>
      </div>

      <div className="resume-section">
        <h2>Education</h2>
        <p>
          <strong>{education.school || "University of Somewhere"}</strong>
        </p>
        <p>{education.degree || "Bachelor of Science in Something"}</p>
        <p>{education.date || "Graduated: May 2020"}</p>
      </div>

      <div className="resume-section">
        <h2>Professional Experience</h2>
        <p>
          <strong>{experience.company || "ABC Corp"}</strong>
        </p>
        <p>{experience.position || "Software Engineer"}</p>
        <p>
          {experience.responsibilities ||
            "Developed and maintained web applications."}
        </p>
        <p>
          {experience.fromDate || "June 2020"} -{" "}
          {experience.toDate || "Present"}
        </p>
      </div>
    </div>
  );
}

export default ResumePreview;
