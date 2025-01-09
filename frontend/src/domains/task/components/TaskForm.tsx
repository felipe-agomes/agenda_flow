import { useContext, useEffect } from "react";
import "../styles/TaskForm.css";
import CalendarContext from "../../../shared/contexts/CalendarContext";
import taskService from "../services/taskService";
import InputTaskForm from "./InputTaskForm";
import Task from "../entities/Task";
import { FormProvider, useForm } from "react-hook-form";
import CalendarMonth from "../../calendar/entities/CalendarMonth";

type TaskFormData = Task;

type TaskFormProp = {
  calendar: CalendarMonth;
  callback: (task: Task) => void;
}

export default function TaskForm({ calendar, callback }: TaskFormProp) {
  const { userId, taskForm, closeTaskForm, selectedDay } =
    useContext(CalendarContext);

  const methods = useForm<TaskFormData>({
    defaultValues: {
      id: undefined,
      title: undefined,
      description: undefined,
      dueAt: undefined,
      createdAt: undefined,
    },
  });

  useEffect(() => {
    if (taskForm.task) {
      methods.reset({
        id: taskForm.task.id,
        title: taskForm.task.title,
        description: taskForm.task.description,
        dueAt: taskForm.task.dueAt,
        createdAt: taskForm.task.createdAt,
      });
    }
  }, [taskForm.task, methods]);

  const onSubmit = async (data: TaskFormData) => {
    closeTaskForm();

    if (!taskForm.task) {
      data.dueAt = new Date(calendar.year, calendar.month, selectedDay);
      data.createdAt = new Date();
    }
    const task = await taskService.saveTask(userId, data);

    callback(task);
  };

  return (
    <FormProvider {...methods}>
      <form
        id="form_task"
        className={taskForm.isOpen ? "open" : "close"}
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        <div className="form_header">
          <button
            className="form_close_button"
            type="button"
            onClick={() => {
              closeTaskForm();
            }}
          >
            X
          </button>
        </div>
        <InputTaskForm label="Titulo" name="title" />
        <InputTaskForm label="Descricao" name="description" />
        <button type="submit">Salvar</button>
      </form>
    </FormProvider>
  );
}
