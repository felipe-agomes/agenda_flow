import { useContext, useState } from "react";
import "../styles/Panel.css";
import CalendarContext from "../../../shared/contexts/CalendarContext";
import TaskForm from "./TaskForm";
import CalendarMonth from "../../calendar/entities/CalendarMonth";
import Task from "../entities/Task";
import TaskList from "./TaskList";

type PenelProp = {
  calendar: CalendarMonth;
  callbackSave: (task: Task) => void;
  callbackRemove: (taskId?: number) => void;
};

export default function Panel({ calendar, callbackRemove, callbackSave }: PenelProp) {
  const { openTaskForm, selectedDay, closeTaskForm, taskForm } = useContext(CalendarContext);
  const [panelStatus, setPanelStatus] = useState<string>("close");

  const tasks = selectedDay ? calendar.getTasksDay(selectedDay) : calendar.getAllTasks()

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
          <div className="header_left">
            <button
              className="panel_display_button"
              onClick={handleDisplayButton}
            >
              P
            </button>
            {taskForm.isOpen ?
              <button
                className="form_close_button"
                type="button"
                onClick={closeTaskForm}
              >
                X
              </button>
              :
              <button
                className={`panel_add_button ${selectedDay ? "display" : "hidden"
                  }`}
                onClick={handleAddButton}
              >
                +
              </button>
            }
          </div>
          <div className="header_right">
          </div>
        </div>
        <TaskList tasks={tasks} />
        <TaskForm calendar={calendar} callbackSave={callbackSave} callbackRemove={callbackRemove} />
      </div>
    </>
  );
}
