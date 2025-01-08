import { useContext, useState } from "react";
import "../styles/Panel.css";
import CalendarContext from "../../../shared/contexts/CalendarContext";
import Task from "../entities/Task";

type PenelProp = {
  tasks: Task[];
};

export default function Panel({ tasks }: PenelProp) {
  const { openModalTask, selectedDay } = useContext(CalendarContext);

  const [panelStatus, setPanelStatus] = useState<string>("close");

  const handleDisplayButton = () => {
    setPanelStatus(panelStatus === "open" ? "close" : "open");
  };

  const handleAddButton = () => {
    if (selectedDay) {
      openModalTask();
    }
  };

  return (
    <>
      <div id="panel" className={panelStatus}>
        <div className="panel_header">
          <button
            className="panel_display_button"
            onClick={handleDisplayButton}
          >
            P
          </button>
          {
            <button
              className={`panel_add_button ${
                selectedDay ? "display" : "hidden"
              }`}
              onClick={handleAddButton}
            >
              +
            </button>
          }
        </div>
        <ul id="task_list">
          {tasks.map((task) => {
            return (
              <li key={task.id} className="task_item">
                {task.dueAt + " = " + task.title}
              </li>
            ); // TODO: Criar um componente <Task /> porque vai ter mais complexidade
          })}
        </ul>
      </div>
    </>
  );
}
