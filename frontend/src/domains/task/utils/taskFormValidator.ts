export type TaskFormData = {
  id?: number;
  title?: string;
  description?: string;
  dueAt?: Date;
  createdAt?: Date;
  completedAt: Date | null;
  deletedAt: Date | null;
};

export type TaskFormValidate = {
  field: string;
  message: string;
}

export const taskFomrValidator = {
  perform: (taskForm: TaskFormData): TaskFormValidate[] => {
    const taskFormValidate: TaskFormValidate[] = [];

    if (!taskForm.title) {
      taskFormValidate.push({field: "title", message: "Titulo obrigatorio"});
    }

    return taskFormValidate;
  }
}