import { useContext, useState } from "react";
import "../styles/Panel.css";
import CalendarContext from "../../../shared/contexts/CalendarContext";
import Task from "../entities/Task";
import TaskItem from "./TaskItem";

type PenelProp = {
  tasks: Task[];
};

export default function Panel({ tasks }: PenelProp) {
  const { openTaskForm, selectedDay } = useContext(CalendarContext);

  const [panelStatus, setPanelStatus] = useState<string>("close");

  const handleDisplayButton = () => {
    setPanelStatus(panelStatus === "open" ? "close" : "open");
  };

  const handleAddButton = () => {
    if (selectedDay) {
      openTaskForm();
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
              <TaskItem key={task.id} task={task} />
            );
          })}
        </ul>
      </div>
    </>
  );
}
