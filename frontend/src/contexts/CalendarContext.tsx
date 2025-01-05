import { createContext, Dispatch, SetStateAction } from "react";
import Task from "../entities/Task";

type CalendarContextType = {
  tasks: Task[];
  setTasks: Dispatch<SetStateAction<Task[]>>;
  selectedDay: number | undefined;
  setSelectedDay: Dispatch<SetStateAction<number | undefined>>;
};

const CalendarContext = createContext<CalendarContextType>({
  tasks: [],
  setTasks: () => {},
  selectedDay: undefined,
  setSelectedDay: () => {},
});

export default CalendarContext;
