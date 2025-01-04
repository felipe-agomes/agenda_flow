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
    const response = await axios.get<TaskResponse[]>(
      "http://localhost:8080/api/task",
      {
        headers: { userId: userId, year: year, month: month },
      }
    );

    return response.data;
  },
};

export default taskApi;
