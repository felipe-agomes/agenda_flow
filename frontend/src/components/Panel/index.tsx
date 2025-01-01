import { useState } from "react";
import "./Panel.css";
import Task from "../../entities/Task";

type PanelProp = {
  tasks: Task[];
};

export default function Panel({ tasks }: PanelProp) {
  const [panelStatus, setPanelStatus] = useState<string>("close");

  const handlePanelButton = () => {
    setPanelStatus(panelStatus === "open" ? "close" : "open");
  };

  return (
    <div id="panel" className={panelStatus}>
      <button className="panelButton" onClick={handlePanelButton}>
        P
      </button>
      <ul>
        {tasks.map((task) => {
          return <li key={task.id}>{task.title}</li>; // TODO: Criar um componente <Task /> porque vai ter mais complexidade
        })}
      </ul>
    </div>
  );
}
