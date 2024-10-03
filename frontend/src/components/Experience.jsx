import React, { useState } from "react";

function Experience({ onSubmit }) {
  const [experience, setExperience] = useState({
    company: "",
    position: "",
    responsibilities: "",
    fromDate: "",
    toDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExperience((prevExperience) => ({
      ...prevExperience,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(experience);
  };

  return (
    <div>
      <h2>Experience</h2>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Experience;
