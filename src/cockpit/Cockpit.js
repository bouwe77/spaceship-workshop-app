import React, { useState } from "react";

export default function Cockpit() {
  const [engineMode, setEngineMode] = useState("impulse");

  return (
    <div className="cockpit">
      <div className="engineModePanel">
        <div>
          <input
            type="radio"
            checked={engineMode === "idle"}
            onChange={() => setEngineMode("idle")}
            name="engineMode"
          />
          Idle
        </div>
        <div>
          <input
            type="radio"
            checked={engineMode === "thrusters"}
            onChange={() => setEngineMode("thrusters")}
            name="engineMode"
          />
          Thrusters
        </div>
        <div>
          <input
            type="radio"
            checked={engineMode === "impulse"}
            onChange={() => setEngineMode("impulse")}
            name="engineMode"
          />
          Impulse
        </div>
      </div>
    </div>
  );
}
