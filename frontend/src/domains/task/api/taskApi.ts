import axios from "axios";
import Task from "../entities/Task";

export type TaskResponse = {
  id: number;
  title: string;
  description: string;
  dueAt: string;
  createdAt: string;
  completedAt: string;
  deletedAt: string;
};

const taskApi = {
  API_URL: import.meta.env.VITE_API_URL,
  getTasksMonth: async (
    userId: number,
    year: number,
    month: number
  ): Promise<TaskResponse[]> => {
    const response = await axios.get<TaskResponse[]>(
      `${taskApi.API_URL}/api/task/month`,
      {
        headers: {
          "Content-Type": "application/json",
          userId,
          year,
          month,
        },
      }
    );

    return response.data;
  },

  getTasksDay: async (
    userId: number,
    year: number,
    month: number,
    day: number
  ): Promise<TaskResponse[]> => {
    const response = await axios.get<TaskResponse[]>(
      `${taskApi.API_URL}/api/task/day`,
      {
        headers: {
          "Content-Type": "application/json",
          userId,
          year,
          month,
          day,
        },
      }
    );

    return response.data;
  },

  saveTask: async (userId: number, task: Task): Promise<TaskResponse> => {
    const response = await axios.post<TaskResponse>(
      `${taskApi.API_URL}/api/task/save`,
      task,
      {
        headers: {
          "Content-Type": "application/json",
          userId,
        },
      }
    );

    return response.data;
  },

  deleteTask: async (taskId: number): Promise<boolean> => {
    const response = await axios.delete<boolean>(
      `${taskApi.API_URL}/api/task/delete`
      , { headers: { taskId } }
    );

    return response.data;
  }
};

export default taskApi;
