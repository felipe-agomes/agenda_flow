import { useContext } from "react";
import Task from "../entities/Task";
import style from "../styles/TaskItem.module.css";
import TaskCircle from "./TaskCircle";
import CalendarContext from "../../../shared/contexts/CalendarContext";

type TaskItemProp = {
  task: Task
}

export default function TaskItem({ task }: TaskItemProp) {
  const { openTaskForm } = useContext(CalendarContext);

  const handleTaskItemClick = () => {
    openTaskForm(task);
  };

  return <li key={task.getId()} className={style.taskItem} onClick={handleTaskItemClick}>
    <p hidden >{task.getId()}</p>
    <TaskCircle />
    <span>{task.getDueAt()?.getDate()}</span>
    <p className={style.taskTitle}>{task.getTitle()}</p>
  </li>
}