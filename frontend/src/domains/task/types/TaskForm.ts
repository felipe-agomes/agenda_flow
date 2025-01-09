import Task from "../entities/Task";

export type TaskForm = {
  isOpen: boolean;
  task?: Task;
};