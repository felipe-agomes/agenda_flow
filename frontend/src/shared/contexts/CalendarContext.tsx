import { createContext, Dispatch, SetStateAction } from "react";
import Task from "../../domains/task/entities/Task";

type CalendarContextType = {
  selectedDay: number | undefined;
  setSelectedDay: Dispatch<SetStateAction<number | undefined>>;
  taskForm: { isOpen: boolean, task?: Task };
  openTaskForm: (task?: Task) => void;
  closeTaskForm: () => void;
  userId: number;
  setUserId: Dispatch<SetStateAction<number>>;
};

const CalendarContext = createContext<CalendarContextType>({
  selectedDay: undefined,
  setSelectedDay: () => { },
  taskForm: { isOpen: false },
  openTaskForm: () => { },
  closeTaskForm: () => { },
  userId: 9361, // TODO: Esta fixo, mas precisa fazer um esquema de login
  setUserId: () => { },
});

export default CalendarContext;
