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
  const {
    year,
    month,
    monthName,
    daysInMonth
  } = CalendarMonth.getMonthInfo(2025, 1); // TODO: Ver a possibilidade de colocar tudo no CalendarMonth

  const { setTitle } = useContext(TamplateContext);
  const { userId, closeModalTask, setSelectedDay, selectedDay } = useContext(CalendarContext);
  const [calendar, setCalendar] = useState<CalendarMonth>(new CalendarMonth());

  const updateCalendar = useCallback(async () => {
    const updatedCalendar = new CalendarMonth();
    updatedCalendar.year = year;
    updatedCalendar.month = month;

    updatedCalendar.calendarDays = CalendarMonth.createCalendarDays(daysInMonth);

    const tasks = await taskService.fetchTasksMonth(
      userId,
      updatedCalendar.year,
      updatedCalendar.month
    );

    updatedCalendar.setTasks(tasks);

    setCalendar(updatedCalendar);
  }, [year, month, daysInMonth, userId]);

  useEffect(() => {
    setTitle(monthName);

    updateCalendar();
  }, [monthName, updateCalendar, setTitle]);

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
