import { createContext, Dispatch, SetStateAction } from "react";

type CalendarContextType = {
  selectedDay: number | undefined;
  setSelectedDay: Dispatch<SetStateAction<number | undefined>>;
  isModalTaskOpen: boolean;
  openModalTask: Dispatch<SetStateAction<void>>;
  closeModalTask: Dispatch<SetStateAction<void>>;
  userId: number;
  setUserId: Dispatch<SetStateAction<number>>;
};

const CalendarContext = createContext<CalendarContextType>({
  selectedDay: undefined,
  setSelectedDay: () => {},
  isModalTaskOpen: false,
  openModalTask: () => {},
  closeModalTask: () => {},
  userId: 9361, // TODO: Esta fixo, mas precisa fazer um esquema de login
  setUserId: () => {},
});

export default CalendarContext;
