import { useEffect, useState } from "react";
import { taskFomrValidator, TaskFormData, TaskFormValidate } from "../utils/taskFormValidator";
import Task from "../entities/Task";
import CalendarMonth from "../../calendar/entities/CalendarMonth";
import taskService from "../services/taskService";
import { TaskForm } from "../components/TaskForm";

export default function useTaskForm(taskForm: TaskForm, calendar: CalendarMonth, selectedDay: number | undefined, userId: number, closeTaskForm: () => void, callbackSave: (task: Task) => void, callbackRemove: (taskId?: number) => void) {
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [formValues, setFormValues] = useState<TaskFormData>({
    id: undefined,
    title: "",
    description: "",
    dueAt: undefined,
    createdAt: undefined,
    completedAt: null,
    deletedAt: null
  });

  useEffect(() => {
    if (taskForm.existingTask) {
      setFormValues({
        id: taskForm.existingTask.getId(),
        title: taskForm.existingTask.getTitle(),
        description: taskForm.existingTask.getDescription(),
        dueAt: taskForm.existingTask.getDueAt(),
        createdAt: taskForm.existingTask.getCreatedAt(),
        completedAt: taskForm.existingTask.getCompletedAt(),
        deletedAt: taskForm.existingTask.getDeletedAt(),
      });
    } else {
      setFormValues({
        id: undefined,
        title: "",
        description: "",
        dueAt: undefined,
        createdAt: undefined,
        completedAt: null,
        deletedAt: null,
      });
    }
  }, [taskForm.existingTask]);

  const handleChange = (inputValue: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = inputValue.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSaveSubmit = async () => {
    setFormErrors({});

    const validationErrors: TaskFormValidate[] = taskFomrValidator.perform(formValues);

    if (validationErrors.length > 0) {
      setFormErrors(
        validationErrors.reduce((acc, err) => {
          acc[err.field] = err.message;
          return acc;
        }, {} as Record<string, string>)
      );
      return;
    }

    closeTaskForm();

    const newTask = new Task(formValues.id, formValues.title, formValues.description, formValues.dueAt, formValues.createdAt, formValues.completedAt, formValues.deletedAt)

    if (!taskForm.existingTask) {
      newTask.setDueAt(new Date(calendar.year, calendar.month, selectedDay));
      newTask.setCreatedAt(new Date());
    }

    const savedTask = await taskService.saveTask(userId, newTask);
    callbackSave(savedTask);
  };

  const handleRemoveSubmit = async () => {
    closeTaskForm();

    const isRemoved = await taskService.deleteById(taskForm.existingTask?.getId());

    if (isRemoved) {
      callbackRemove(taskForm.existingTask?.getId());
    }
  }

  return {
    formValues,
    formErrors,
    handleChange,
    handleSaveSubmit,
    handleRemoveSubmit,
  };
}