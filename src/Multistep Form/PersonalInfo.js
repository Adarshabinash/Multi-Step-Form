import React from "react";

function PersonalInfo({ formData, setFormData }) {
  return (
    <div className="personalInfo">
      <input
        type="text"
        placeholder="Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="class"
        value={formData.class}
        onChange={(e) => setFormData({ ...formData, class: e.target.value })}
      />
      <input
        type="text"
        placeholder="Language"
        value={formData.language}
        onChange={(e) => setFormData({ ...formData, language: e.target.value })}
      />
    </div>
  );
}

export default PersonalInfo;
