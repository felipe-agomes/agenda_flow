import { IoIosArrowBack, IoIosAdd } from "react-icons/io";
import { useContext, useState } from "react";
import style from "../styles/Panel.module.css";
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
  const [panelIsOpen, setPanelIsOpen] = useState<boolean>(false);

  const tasks = selectedDay ? calendar.getTasksDay(selectedDay) : calendar.getAllTasks()

  const handleDisplayButton = () => {
    setPanelIsOpen(!panelIsOpen);
    closeTaskForm();
  };

  const handleAddButton = () => {
    if (selectedDay) {
      openTaskForm();
    }
  };

  const handleTaskItemClick = (task: Task) => {
    openTaskForm(task);
    setPanelIsOpen(true);
  };

  return (
    <>
      <div className={`${style.panel} ${panelIsOpen ? style.open : style.close}`}>
        <div className={style.panelHeader}>
          <div className={style.headerLeft}>
            <IoIosArrowBack
              className={`${style.panelDisplayButton} ${panelIsOpen ? style.open : style.close}`}
              onClick={handleDisplayButton}
            />
            {
              (taskForm.isOpen || selectedDay)
              && <IoIosAdd
                className={taskForm.isOpen ? style.panelCloseButton : style.panelAddButton}
                onClick={taskForm.isOpen ? closeTaskForm : handleAddButton} />
            }
          </div>
          <div className={style.headerRight}>
          </div>
        </div>
        <TaskList tasks={tasks} callback={handleTaskItemClick} />
        <TaskForm calendar={calendar} callbackSave={callbackSave} callbackRemove={callbackRemove} />
      </div>
    </>
  );
}
