import { useState } from "react";
import CalendarContext from "../contexts/CalendarContext";
import Task from "../entities/Task";
import calendarUtils from "../utils/calendarUtils";
import Calendar from "../entities/CalendarMonth";

export default function CalendarProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [calendar, setCalendar] = useState<Calendar>(new Calendar());
  const [selectedDay, setSelectedDay] = useState<number | undefined>(undefined);
  const [isModalTaskOpen, setIsModalTaskOpen] = useState<boolean>(false);
  const [userId, setUserId] = useState<number>(9361); // TODO: Esta fixo, mas precisa fazer um esquema de login

  const openModalTask = () => setIsModalTaskOpen(true);
  const closeModalTask = () => setIsModalTaskOpen(false);
  const addTaskOnCalendar = (task: Task) => {
    const newCalendar = calendarUtils.addTaskOnCalendar(calendar, task);
    setCalendar(newCalendar);
  };


  return (
    <CalendarContext.Provider
      value={{
        tasks,
        setTasks,
        calendar,
        setCalendar,
        addTaskOnCalendar,
        selectedDay,
        setSelectedDay,
        isModalTaskOpen,
        closeModalTask,
        openModalTask,
        userId,
        setUserId
      }}
    >
      {children}
    </CalendarContext.Provider>
  );
}
