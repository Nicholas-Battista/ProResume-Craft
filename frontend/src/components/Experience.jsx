import React, { useState } from "react";

function Experience({ onChange }) {
  const [experience, setExperience] = useState({
    company: "",
    position: "",
    responsibilities: "",
    fromDate: "",
    toDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExperience((prevExperience) => {
      const updatedExperience = { ...prevExperience, [name]: value };
      onChange(updatedExperience); // Call onChange to update the parent state in real-time
      return updatedExperience;
    });
  };

  return (
    <div>
      <h2>Experience</h2>
      <form>
        <input
          type="text"
          name="company"
          placeholder="Company Name"
          value={experience.company}
          onChange={handleChange}
        />
        <input
          type="text"
          name="position"
          placeholder="Position Title"
          value={experience.position}
          onChange={handleChange}
        />
        <textarea
          name="responsibilities"
          placeholder="Main Responsibilities"
          value={experience.responsibilities}
          onChange={handleChange}
        />
        <input
          type="date"
          name="fromDate"
          placeholder="From Date"
          value={experience.fromDate}
          onChange={handleChange}
        />
        <input
          type="date"
          name="toDate"
          placeholder="To Date"
          value={experience.toDate}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}

export default Experience;
