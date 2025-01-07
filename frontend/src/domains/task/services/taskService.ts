import taskApi from "../api/taskApi";
import Task from "../entities/Task";
import taskMapper from "../mappers/taskMapper";

const taskService = {
  fetchTasksMonth: async (
    userId: number,
    year?: number,
    month?: number
  ): Promise<Task[]> => {
    const tasksResponse = await taskApi.getTasksMonth(userId, year, month);
    const tasks: Task[] = [];

    for (const taskResponse of tasksResponse) {
      tasks.push(taskMapper.toTask(taskResponse));
    }

    return tasks;
  },

  fetchTasksDay: async (
    userId: number,
    year: number,
    month: number,
    day: number
  ): Promise<Task[]> => {
    const tasksResponse = await taskApi.getTasksDay(userId, year, month, day);
    const tasks: Task[] = [];

    for (const taskResponse of tasksResponse) {
      tasks.push(taskMapper.toTask(taskResponse));
    }

    return tasks;
  },

  saveTask: async (userId: number, task: Task): Promise<Task> => {
    const taskResponse = await taskApi.saveTask(userId, task);

    return taskMapper.toTask(taskResponse);
  },
};

export default taskService;
