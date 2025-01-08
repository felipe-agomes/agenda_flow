import { useContext } from "react";
import "../styles/ModalTask.css";
import CalendarContext from "../contexts/CalendarContext";
import taskService from "../../domains/task/services/taskService";
import InputTaskForm from "./InputTaskForm";
import Task from "../../domains/task/entities/Task";
import { FormProvider, useForm } from "react-hook-form";
import CalendarMonth from "../../domains/calendar/entities/CalendarMonth";

type FormModalTaskData = Task;

type ModalTaskProp = {
  calendar: CalendarMonth;
  callback: (task: Task) => void;
}

export default function ModalTask({ calendar, callback }: ModalTaskProp) {
  const { userId, isModalTaskOpen, closeModalTask, selectedDay } =
    useContext(CalendarContext);

  const methods = useForm<FormModalTaskData>({
    defaultValues: {
      title: "",
      description: "",
      dueAt: undefined,
      createdAt: undefined,
    },
  });

  const onSubmit = async (data: FormModalTaskData) => {
    closeModalTask();

    data.dueAt = new Date(calendar.year, calendar.month, selectedDay);
    data.createdAt = new Date();
    const task = await taskService.saveTask(userId, data);
    
    callback(task);
  };

  return (
    <FormProvider {...methods}>
      <form
        id="modal_task"
        className={isModalTaskOpen ? "open" : "close"}
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        <div className="modal_header">
          <button
            className="modal_close_button"
            type="button"
            onClick={() => {
              closeModalTask();
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
