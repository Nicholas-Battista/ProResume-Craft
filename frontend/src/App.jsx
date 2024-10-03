import React, { useState } from "react";
import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";
import ResumePreview from "./components/ResumePreview";

function App() {
  const [resumeData, setResumeData] = useState({
    generalInfo: {},
    education: {},
    experience: {},
  });

  const handleGeneralInfoSubmit = (generalInfo) => {
    setResumeData((prevData) => ({
      ...prevData,
      generalInfo,
    }));
  };

  const handleEducationSubmit = (education) => {
    setResumeData((prevData) => ({
      ...prevData,
      education,
    }));
  };

  const handleExperienceSubmit = (experience) => {
    setResumeData((prevData) => ({
      ...prevData,
      experience,
    }));
  };

  return (
    <div>
      <h1>ProResume Craft</h1>
      <GeneralInfo onSubmit={handleGeneralInfoSubmit} />
      <Education onSubmit={handleEducationSubmit} />
      <Experience onSubmit={handleExperienceSubmit} />
      <ResumePreview data={resumeData} />
    </div>
  );
}

export default App;
