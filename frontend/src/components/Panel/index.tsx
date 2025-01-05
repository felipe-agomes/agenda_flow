import { useContext, useState } from "react";
import "./Panel.css";
import CalendarContext from "../../contexts/CalendarContext";

export default function Panel() {
  const { tasks } = useContext(CalendarContext);

  const [panelStatus, setPanelStatus] = useState<string>("close");

  const handlePanelButton = () => {
    setPanelStatus(panelStatus === "open" ? "close" : "open");
  };

  return (
    <div id="panel" className={panelStatus}>
      <button className="panel_button" onClick={handlePanelButton}>
        P
      </button>
      <ul id="task_list">
        {tasks.map((task) => {
          return <li key={task.id} className="task_item">{task.dueAt + " = " + task.title}</li>; // TODO: Criar um componente <Task /> porque vai ter mais complexidade
        })}
      </ul>
    </div>
  );
}
