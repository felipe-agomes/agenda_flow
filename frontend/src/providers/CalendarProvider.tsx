import { useState } from "react";
import CalendarContext from "../contexts/CalendarContext";
import Task from "../entities/Task";

export default function CalendarProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [selectedDay, setSelectedDay] = useState<number | undefined>(undefined);

  return (
    <CalendarContext.Provider value={{ tasks, setTasks, selectedDay, setSelectedDay}}>
      {children}
    </CalendarContext.Provider>
  );
}
