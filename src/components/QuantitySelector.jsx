import React from "react";

const levels = ["조금만", "보통", "많이", "제외"];

function QuantitySelector({ ingredient, selected, onChange }) {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <div>{ingredient}</div>
      <div style={{ display: "flex", gap: "1rem", marginTop: "0.5rem" }}>
        {levels.map((level) => (
          <label key={level}>
            <input
              type="checkbox"
              checked={selected === level}
              onChange={() => onChange(level)}
            />
            {level}
          </label>
        ))}
      </div>
    </div>
  );
}

export default QuantitySelector;
