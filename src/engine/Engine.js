import React from "react";

export default function Engine() {
  const engineMode = "idle";

  return (
    <div className="engine">
      <div className="engineMonitor">
        <h1>Engine Mode</h1>
        <p>{engineMode}</p>
      </div>
    </div>
  );
}
