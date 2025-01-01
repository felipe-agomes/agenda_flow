export type TaskDto = {
    id: number;
    day: number;
    title: string;
    description: string;
}

type TaskResponse = {
    tasks: TaskDto[]
}

const taskApi = {
    getTasks: async (userId: number, month: number): Promise<TaskResponse> => {
        return {tasks: [{id: userId, day: month, description: "teste title", title: "teste description"}]};
    }
}

export default taskApi;