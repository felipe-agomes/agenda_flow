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
  getTasks: async (
    userId: number,
    year: number,
    month: number
  ): Promise<TaskResponse[]> => {
    const apiUrl = import.meta.env.VITE_API_URL;

    const response = await axios.get<TaskResponse[]>(
      `${apiUrl}/api/task`,
      {
        headers: { userId: userId, year: year, month: month },
      }
    );

    return response.data;
  },
};

export default taskApi;
