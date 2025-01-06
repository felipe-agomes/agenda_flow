import { createContext, Dispatch, SetStateAction } from "react";
import Task from "../../domains/task/entities/Task";
import Calendar from "../../domains/calendar/entities/CalendarMonth";

type CalendarContextType = {
  tasks: Task[];
  setTasks: Dispatch<SetStateAction<Task[]>>;
  calendar: Calendar;
  setCalendar: Dispatch<SetStateAction<Calendar>>;
  addTaskOnCalendar: (task: Task) => void;
  selectedDay: number | undefined;
  setSelectedDay: Dispatch<SetStateAction<number | undefined>>;
  isModalTaskOpen: boolean;
  openModalTask: Dispatch<SetStateAction<void>>;
  closeModalTask: Dispatch<SetStateAction<void>>;
  userId: number;
  setUserId: Dispatch<SetStateAction<number>>;
};

const CalendarContext = createContext<CalendarContextType>({
  tasks: [],
  setTasks: () => {},
  calendar: new Calendar(), 
  setCalendar: () => {},
  addTaskOnCalendar: () => {},
  selectedDay: undefined,
  setSelectedDay: () => {},
  isModalTaskOpen: false,
  openModalTask: () => {},
  closeModalTask: () => {},
  userId: 9361, // TODO: Esta fixo, mas precisa fazer um esquema de login
  setUserId: () => {},
});

export default CalendarContext;
