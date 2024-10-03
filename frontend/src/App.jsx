import { useState } from "react";
import GeneralInfo from "./components/GeneralInfo";

function App() {
  // state to hold the resume data
  const [resumeData, setResumeData] = useState({
    GeneralInfo: {},
    education: [],
    experience: [],
  });

  // update functions for each state
  const updateGeneralInfo = (info) => {
    setResumeData((prevState) => ({
      ...prevState,
      GeneralInfo: info,
    }));
  };

  return (
    <div className="App">
      <h1>ProResume Craft</h1>
      <GeneralInfo onSubmit={updateGeneralInfo} />
      {/* <Education onSubmit={updateEducation} />
      <Experience onSubmit={updateExperience} />
      <ResumePreview data={resumeData} /> */}
    </div>
  );
}
export default App;
