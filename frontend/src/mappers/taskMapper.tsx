import { TaskResponse } from "../api/taskApi";
import Task from "../entities/Task";

const taskMapper = {
  toTask: (taskResponse: TaskResponse): Task => {
    const { id, title, description, dueAt, createdAt, completedAt, deletedAt } =
      taskResponse;

    return new Task(
      id,
      title,
      description,
      // dueAt,
      // createdAt,
      // completedAt,
      // deletedAt
      taskMapper.convertToDate(dueAt),
      taskMapper.convertToDate(createdAt),
      completedAt ? taskMapper.convertToDate(completedAt) : null,
      deletedAt ? taskMapper.convertToDate(deletedAt) : null
    );
  },

  convertToDate: (dateString: string): Date => {
    return new Date(dateString);
  },
};

export default taskMapper;
