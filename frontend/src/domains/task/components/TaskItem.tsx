import Task from "../entities/Task";
import style from "../styles/TaskItem.module.css";
import TaskCircle from "./TaskCircle";

type TaskItemProp = {
  task: Task
  callback: (task: Task) => void;
}

export default function TaskItem({ task, callback }: TaskItemProp) {
  return (
    <li key={task.getId()} className={style.taskItem} onClick={() => callback(task)}>
      <TaskCircle />
      <p className={style.taskDay}>{task.getDueAt()?.getDate()}</p>
      <p className={style.taskTitle}>{task.getTitle()}</p>
    </li>
  );
}