import React, { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    dob: "",
    skills: [],
    address: "",
    state: "",
    age: ""
  });

  const [submitted, setSubmitted] = useState(false);

  // Safe today's date for max attribute
  const today = new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
    .toISOString()
    .split("T")[0];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    // ---- SKILLS CHECKBOX HANDLER ----
    if (type === "checkbox") {
      let updatedSkills = [...formData.skills];
      if (checked) updatedSkills.push(value);
      else updatedSkills = updatedSkills.filter((s) => s !== value);

      setFormData({ ...formData, skills: updatedSkills });
      return;
    }

    // ---- DOB HANDLER (FULLY DEBUGGED) ----
    else if (name === "dob") {
      if (!value) {
        setFormData({ ...formData, dob: "", age: "" });
        return;
      }

      const birthDate = new Date(value);

      // Invalid format check
      if (isNaN(birthDate.getTime())) {
        alert("Invalid date format.");
        setFormData({ ...formData, dob: "", age: "" });
        return;
      }

      // Local date (not UTC)
      const now = new Date();
      const todayLocal = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate()
      );

      // Future DOB check
      if (birthDate > todayLocal) {
        alert("Date of Birth cannot be in the future.");
        setFormData({ ...formData, dob: "", age: "" });
        return;
      }

      // Age calculation
      let age = todayLocal.getFullYear() - birthDate.getFullYear();
      const mdiff = todayLocal.getMonth() - birthDate.getMonth();

      if (
        mdiff < 0 ||
        (mdiff === 0 && todayLocal.getDate() < birthDate.getDate())
      ) {
        age--;
      }

      if (age < 0) age = 0; // safety

      setFormData({ ...formData, dob: value, age: age });
      return;
    }

    // ---- DEFAULT HANDLER ----
    setFormData({ ...formData, [name]: value });
  };

  // ---- FORM SUBMIT ----
  const handleSubmit = (e) => {
    e.preventDefault();

    alert(`
First Name: ${formData.firstName}
Last Name: ${formData.lastName}
Gender: ${formData.gender}
DOB: ${formData.dob}
Age: ${formData.age}
Skills: ${formData.skills.join(", ")}
Address: ${formData.address}
State: ${formData.state}
    `);

    setSubmitted(true);
  };

  // ---- RESET ----
  const handleReset = () => {
    setFormData({
      firstName: "",
      lastName: "",
      gender: "",
      dob: "",
      skills: [],
      address: "",
      state: "",
      age: ""
    });
  };

  // ---- THANK YOU PAGE ----
  if (submitted) {
    return (
      <div className="thank-you">
        <h1>Thank You for Your Registration!</h1>
      </div>
    );
  }

  // ---- FORM UI ----
  return (
    <form onSubmit={handleSubmit}>
      <h2>Registration Form</h2>

      <label>First Name</label>
      <input
        type="text"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        required
      />

      <label>Last Name</label>
      <input
        type="text"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        required
      />

      <label>Gender</label>
      <div className="option-group">
        <label>
          <input
            type="radio"
            name="gender"
            value="Male"
            checked={formData.gender === "Male"}
            onChange={handleChange}
          />
          Male
        </label>

        <label>
          <input
            type="radio"
            name="gender"
            value="Female"
            checked={formData.gender === "Female"}
            onChange={handleChange}
          />
          Female
        </label>
      </div>

      <label>Date of Birth</label>
      <input
        type="date"
        name="dob"
        value={formData.dob}
        onChange={handleChange}
        max={today}
        required
      />

      <label>Age (Auto Calculated)</label>
      <input type="text" value={formData.age} readOnly />

      <label>Skills</label>
      <div className="option-group">
        <label>
          <input type="checkbox" value="HTML" onChange={handleChange} />
          HTML
        </label>
        <label>
          <input type="checkbox" value="CSS" onChange={handleChange} />
          CSS
        </label>
        <label>
          <input type="checkbox" value="JavaScript" onChange={handleChange} />
          JavaScript
        </label>
      </div>

      <label>Address</label>
      <textarea
        name="address"
        value={formData.address}
        onChange={handleChange}
      ></textarea>

      <label>State</label>
      <select name="state" value={formData.state} onChange={handleChange}>
        <option value="">--Select--</option>
        <option value="Maharashtra">Maharashtra</option>
        <option value="Karnataka">Karnataka</option>
        <option value="Gujarat">Gujarat</option>
      </select>

      <button type="submit">Submit</button>
      <button type="button" onClick={handleReset}>
        Reset
      </button>
    </form>
  );
}

export default App;