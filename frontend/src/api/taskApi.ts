import axios from "axios";

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
  getTasksMonth: async (
    userId: number,
    year: number,
    month: number
  ): Promise<TaskResponse[]> => {
    const apiUrl = import.meta.env.VITE_API_URL;

    const response = await axios.get<TaskResponse[]>(`${apiUrl}/api/task/month`, {
      headers: { userId, year, month },
    });

    return response.data;
  },

  getTasksDay: async (
    userId: number,
    year: number,
    month: number,
    day: number
  ): Promise<TaskResponse[]> => {
    const apiUrl = import.meta.env.VITE_API_URL;
    const response = await axios.get<TaskResponse[]>(`${apiUrl}/api/task/day`, {
      headers: { userId, year, month, day },
    });

    return response.data;
  },
};

export default taskApi;
