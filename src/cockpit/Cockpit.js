import React, { useState } from "react";
import useServer from "../useServer";

export default function Cockpit() {
  const [setCourse] = useServer("Bouwe");
  const [engineMode, setEngineMode] = useState("impulse");

  function engage() {
    setCourse({ x: 123, y: 456 }, 10);
  }

  return (
    <div className="cockpit">
      <div className="engineModePanel">
        <button onClick={engage}>Engage!</button>
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
