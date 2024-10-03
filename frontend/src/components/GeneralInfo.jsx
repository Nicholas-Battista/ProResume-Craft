import React, { useState } from "react";

function GeneralInfo({ onChange }) {
  const [info, setInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo((prevInfo) => {
      const updatedInfo = { ...prevInfo, [name]: value };
      onChange(updatedInfo);
      return updatedInfo;
    });
  };

  return (
    <div>
      <h2>General Information</h2>
      <form>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={info.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={info.email}
          onChange={handleChange}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={info.phone}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}

export default GeneralInfo;
