import { useContext } from "react";
import Task from "../entities/Task";
import "../styles/TaskItem.css";
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

  return <li key={task.id} className="task_item" onClick={handleTaskItemClick}>
    <p hidden >{task.id}</p>
    <TaskCircle />
    <span>{task.dueAt.getDate()}</span>
    <p className="task_title">{task.title}</p>
  </li>
}