import React from "react";
import Engine from "./engine/Engine";
import Cockpit from "./cockpit/Cockpit";

export default function Spaceship() {
  const showCockpit = false;

  return <>{showCockpit ? <Cockpit /> : <Engine />}</>;
}
