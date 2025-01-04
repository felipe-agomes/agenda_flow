import taskApi from "../api/taskApi";
import Task from "../entities/Task";

const taskService = {
  fetchTasks: async (
    userId: number,
    year: number,
    month: number
  ): Promise<Task[]> => {
    const tasksResponse = await taskApi.getTasks(userId, year, month);
    const tasks: Task[] = [];

    for (const {
      id,
      title,
      description,
      dueAt,
      completedAt,
      createdAt,
      deletedAt,
    } of tasksResponse) {
      tasks.push(
        new Task(
          id,
          title,
          description,
          taskService.convertToDate(dueAt),
          taskService.convertToDate(createdAt),
          taskService.convertToDate(completedAt),
          taskService.convertToDate(deletedAt)
        )
      );
    }

    return tasks;
  },

  convertToDate: (toConvert: string): Date => {
    return new Date(toConvert);
  },
};

export default taskService;
