import React, { useState } from "react";
import Engine from "./engine/Engine";
import Cockpit from "./cockpit/Cockpit";

export default function Spaceship() {
  const [showCockpit, setShowCockpit] = useState(true);

  return (
    <>
      <button onClick={() => setShowCockpit(!showCockpit)}>Toggle Cockpit / Engine</button>
      {showCockpit ? <Cockpit /> : <Engine />}
    </>
  );
}
