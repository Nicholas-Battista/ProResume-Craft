import React, { useState } from "react";

function Education({ onChange }) {
  const [education, setEducation] = useState({
    school: "",
    degree: "",
    date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEducation((prevEducation) => {
      const updatedEducation = { ...prevEducation, [name]: value };
      onChange(updatedEducation);
      return updatedEducation;
    });
  };

  return (
    <div>
      <h2>Education</h2>
      <form>
        <input
          type="text"
          name="school"
          placeholder="School Name"
          value={education.school}
          onChange={handleChange}
        />
        <input
          type="text"
          name="degree"
          placeholder="Degree"
          value={education.degree}
          onChange={handleChange}
        />
        <input
          type="date"
          name="date"
          value={education.date}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}

export default Education;
