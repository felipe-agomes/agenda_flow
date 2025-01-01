import { createContext } from "react";

type CalendarContextType = {
  title: string;
  setTitle: (newTitle: string) => void;
};

const CalendarContext = createContext<CalendarContextType>({
  title: "",
  setTitle: () => {},
});

export default CalendarContext;
