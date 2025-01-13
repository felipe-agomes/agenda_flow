import { useContext } from "react";
import style from "../styles/TaskForm.module.css";
import CalendarContext from "../../../shared/contexts/CalendarContext";
import Task from "../entities/Task";
import CalendarMonth from "../../calendar/entities/CalendarMonth";
import useTaskForm from "../hooks/useTaskForm";
import { TaskFormData } from "../utils/taskFormValidator";
import clsx from "clsx";
import EmojiSelector from "../../../shared/components/EmojiSelector";

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

  const hasTextOnInput = (input: keyof TaskFormData) => !!formValues[input];

  return (
    <form
      className={`${style.formTask} ${taskForm.isOpen ? style.display : style.hidden}`}
    >
      <div className={style.inputBox}>
        <label
          htmlFor="title"
          className={clsx(style.inputLabel, {
            [style.upper]: hasTextOnInput("title"),
            [style.error]: formErrors.title && !hasTextOnInput("title")
          })}
        >{formErrors.title && !hasTextOnInput("title") ? formErrors.title : "Novo evento"}</label>
        <input
          id="title"
          type="text"
          name="title"
          value={formValues.title}
          onChange={handleChange}
          className={style.input}
        />
      </div>
      <div className={style.inputBox}>
        <label
          htmlFor="description"
          className={clsx(style.inputLabel, {
            [style.upper]: hasTextOnInput("description"),
            [style.error]: formErrors.description && !hasTextOnInput("description")
          })}
        >{formErrors.description && !hasTextOnInput("description") ? formErrors.description : "Adicione uma descrição"}</label>
        <input
          id="description"
          type="text"
          name="description"
          value={formValues.description}
          onChange={handleChange}
          className={style.input}
        />
      </div>
      <EmojiSelector />
      <button type="button" onClick={handleSaveSubmit}>Salvar</button> {/* TODO: Remover daqui, e colocar no cabecalho do painel*/}
      {taskForm.existingTask && <button type="button" onClick={handleRemoveSubmit}>Remover</button>}
    </form>
  );
}
