import { useContext } from "react";
import "../styles/ModalTask.css";
import { FormProvider, useForm } from "react-hook-form";
import CalendarContext from "../contexts/CalendarContext";
import taskService from "../../domains/task/services/taskService";
import InputTaskForm from "./InputTaskForm";
import Task from "../../domains/task/entities/Task";

type FormModalTaskData = Task;

export default function ModalTask() {
  const { userId, isModalTaskOpen, closeModalTask } =
    useContext(CalendarContext);

  const methods = useForm<FormModalTaskData>({
    defaultValues: {
      title: "",
      description: "",
      dueAt: new Date(),
      createdAt: new Date(),
    },
  });

  const onSubmit = async (data: FormModalTaskData) => {
    closeModalTask();

    const task = await taskService.saveTask(userId, data);
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
