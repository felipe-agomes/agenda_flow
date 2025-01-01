import { useState } from "react";
import "./Panel.css";

export default function Panel() {
  const [panelStatus, setPanelStatus] = useState<string>("close");

  const handlePanelButton = () => {
    setPanelStatus(panelStatus === "open" ? "close" : "open");
  }


  return (
    <div id="panel" className={panelStatus}>
      <button className="panelButton" onClick={handlePanelButton}>
        P
      </button>
    </div>
  );
}
