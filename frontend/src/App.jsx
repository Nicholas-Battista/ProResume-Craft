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

  const handleGeneralInfoChange = (generalInfo) => {
    setResumeData((prevData) => ({
      ...prevData,
      generalInfo,
    }));
  };

  const handleEducationChange = (education) => {
    setResumeData((prevData) => ({
      ...prevData,
      education,
    }));
  };

  const handleExperienceChange = (experience) => {
    setResumeData((prevData) => ({
      ...prevData,
      experience,
    }));
  };

  return (
    <div>
      <h1>ProResume Craft</h1>
      <GeneralInfo onChange={handleGeneralInfoChange} />
      <Education onChange={handleEducationChange} />
      <Experience onChange={handleExperienceChange} />
      <ResumePreview data={resumeData} />
    </div>
  );
}

export default App;
