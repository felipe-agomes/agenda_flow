import taskApi from "../api/taskApi";
import Task from "../entities/Task";

const taskService = {
  fetchTasks: async (userId: number, month: number): Promise<Task[]> => {
    const { tasks: tasksResponse } = await taskApi.getTasks(userId, month);
    const tasks: Task[] = [];

    for (const taskResponse of tasksResponse) {
      tasks.push(
        new Task(
          taskResponse.id,
          taskResponse.day,
          taskResponse.title,
          taskResponse.description
        )
      );
    }

    return tasks;
  },
};

export default taskService;
