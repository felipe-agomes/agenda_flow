import "../styles/CalendarPage.css"
import Calendar from "../../domains/calendar/components/Calendar";
import { useCallback, useContext, useEffect, useState } from "react";
import CalendarContext from "../contexts/CalendarContext";
import Panel from "../../domains/task/components/Panel";
import TamplateContext from "../contexts/TamplateContext";
import taskService from "../../domains/task/services/taskService";
import ModalTask from "./ModalTask";
import CalendarMonth from "../../domains/calendar/entities/CalendarMonth";

export default function CalendarPage() {
  const { setTitle } = useContext(TamplateContext);
  const { userId, closeModalTask, setSelectedDay, selectedDay } = useContext(CalendarContext);
  const [calendar, setCalendar] = useState<CalendarMonth>(new CalendarMonth(2025, 0));

  const updateCalendar = useCallback(async () => {
    const updatedCalendar = new CalendarMonth(2025, 0);

    const tasks = await taskService.fetchTasksMonth(
      userId,
      updatedCalendar.year,
      updatedCalendar.month
    );

    updatedCalendar.setTasks(tasks);

    setCalendar(updatedCalendar);
  }, [calendar, userId]);

  useEffect(() => {
    setTitle(calendar.getMonthName());

    updateCalendar();
  }, [updateCalendar, setTitle]);

  const handleKeyDow = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === "Escape") {
      setSelectedDay(undefined);
      closeModalTask();
    }
  };

  return (
    <section id="content" tabIndex={0} onKeyDown={handleKeyDow}>
      <Calendar calendar={calendar} />
      <Panel tasks={selectedDay ? calendar.getTasksDay(selectedDay) : calendar.getAllTasks()} />
      <ModalTask />
    </section>
  );
}
