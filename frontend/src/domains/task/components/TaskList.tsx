import Task from "../entities/Task";
import style from "../styles/TaskList.module.css";
import TaskItem from "./TaskItem";

type TaskListProp = {
  tasks: Task[];
  callback: (task: Task) => void;
}

export default function TaskList({ tasks, callback }: TaskListProp) {
  return <ul className={style.taskList}>
    {tasks.map((task) => {
      return (
        <TaskItem key={task.getId()} task={task} callback={callback} />
      );
    })}
  </ul>
}