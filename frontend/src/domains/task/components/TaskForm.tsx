import { useContext } from "react";
import "../styles/TaskForm.css";
import CalendarContext from "../../../shared/contexts/CalendarContext";
import Task from "../entities/Task";
import CalendarMonth from "../../calendar/entities/CalendarMonth";
import useTaskForm from "../hooks/useTaskForm";

export type TaskForm = {
  isOpen: boolean;
  existingTask?: Task;
};

type TaskFormProp = {
  calendar: CalendarMonth;
  callbackSave: (task: Task) => void;
  callbackRemove: (taskId?: number) => void;
};

export default function TaskForm({ calendar, callbackSave, callbackRemove }: TaskFormProp) {
  const { userId, taskForm, closeTaskForm, selectedDay } =
    useContext(CalendarContext);

  const { formErrors, formValues, handleChange, handleSaveSubmit, handleRemoveSubmit } = useTaskForm(taskForm, calendar, selectedDay, userId, closeTaskForm, callbackSave, callbackRemove);

  return (
    <form
      id="form_task"
      className={taskForm.isOpen ? "open" : "close"}
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
        {formErrors.title && <span>{formErrors.title}</span>}
      </div>
      <div>
        <label>Descricao</label>
        <input
          type="text"
          name="description"
          value={formValues.description}
          onChange={handleChange}
        />
        {formErrors.description && <span>{formErrors.description}</span>}
      </div>
      <button type="button" onClick={handleSaveSubmit}>Salvar</button>
      {taskForm.existingTask && <button type="button" onClick={handleRemoveSubmit}>Remover</button>}
    </form>
  );
}
