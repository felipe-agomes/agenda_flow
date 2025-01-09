import { useContext, useEffect, useState } from "react";
import "../styles/TaskForm.css";
import CalendarContext from "../../../shared/contexts/CalendarContext";
import taskService from "../services/taskService";
import InputTaskForm from "./InputTaskForm";
import Task from "../entities/Task";
import CalendarMonth from "../../calendar/entities/CalendarMonth";

type TaskFormData = Task;

type TaskFormProp = {
  calendar: CalendarMonth;
  callback: (task: Task) => void;
};

export default function TaskForm({ calendar, callback }: TaskFormProp) {
  const { userId, taskForm, closeTaskForm, selectedDay } =
    useContext(CalendarContext);

  const [formValues, setFormValues] = useState<TaskFormData>({
    id: undefined,
    title: "",
    description: "",
    dueAt: undefined,
    createdAt: undefined,
  });

  // Atualiza os valores do formulário sempre que uma nova tarefa for carregada
  useEffect(() => {
    if (taskForm.existingTask) {
      setFormValues({
        id: taskForm.existingTask.id,
        title: taskForm.existingTask.title,
        description: taskForm.existingTask.description,
        dueAt: taskForm.existingTask.dueAt,
        createdAt: taskForm.existingTask.createdAt,
      });
    } else {
      setFormValues({
        id: undefined,
        title: "",
        description: "",
        dueAt: undefined,
        createdAt: undefined,
      });
    }
  }, [taskForm.existingTask]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    closeTaskForm();

    const newTask = { ...formValues };

    if (!taskForm.existingTask) {
      newTask.dueAt = new Date(calendar.year, calendar.month, selectedDay);
      newTask.createdAt = new Date();
    }

    const savedTask = await taskService.saveTask(userId, newTask);
    callback(savedTask);
  };

  return (
    <form
      id="form_task"
      className={taskForm.isOpen ? "open" : "close"}
      onSubmit={handleSubmit}
    >
      <div className="form_header">
        <button
          className="form_close_button"
          type="button"
          onClick={closeTaskForm}
        >
          X
        </button>
      </div>
      <div>
        <label>Titulo</label>
        <input
          type="text"
          name="title"
          value={formValues.title}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Descricao</label>
        <input
          type="text"
          name="description"
          value={formValues.description}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Salvar</button>
      {taskForm.existingTask && <button type="button">Remover</button>}
    </form>
  );
}
