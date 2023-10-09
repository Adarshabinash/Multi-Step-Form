import React from "react";

function OtherInfo({ formData, setFormData }) {
  return (
    <div className="otherInfo">
      <input
        type="text"
        placeholder="Hobby"
        value={formData.hobby}
        onChange={(e) => setFormData({ ...formData, hobby: e.target.value })}
      />
      
      <textarea
        placeholder="Feedback"
        cols="10"
        rows="5"
        value={formData.feedback}
        onChange={(e) => setFormData({ ...formData, feedback: e.target.value })}
      ></textarea>
    </div>
  );
}

export default OtherInfo;
