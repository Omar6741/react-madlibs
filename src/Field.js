import React from "react";

function Field({ label, value, onChange }) {
  return (
    <div>
      <label>{label}</label>
      <input
        className="input"
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    </div>
  );
};

export default Field;
