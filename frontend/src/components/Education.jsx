import React, { useState } from "react";

function Education({ onSubmit }) {
  const [education, setEducation] = useState({
    school: "",
    degree: "",
    date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEducation((prevEducation) => ({
      ...prevEducation,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(education);
  };

  return (
    <div>
      <h2>Education</h2>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Education;
