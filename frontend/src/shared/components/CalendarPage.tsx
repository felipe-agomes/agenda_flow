import "../styles/CalendarPage.css"
import Calendar from "../../domains/calendar/components/Calendar";
import { useCallback, useContext, useEffect, useState } from "react";
import CalendarContext from "../contexts/CalendarContext";
import Panel from "../../domains/task/components/Panel";
import TamplateContext from "../contexts/TamplateContext";
import taskService from "../../domains/task/services/taskService";
import Task from "../../domains/task/entities/Task";
import CalendarMonth from "../../domains/calendar/entities/CalendarMonth";

export default function CalendarPage() {
  const { setTitle } = useContext(TamplateContext);
  const { userId, closeTaskForm, setSelectedDay } = useContext(CalendarContext);
  const [calendar, setCalendar] = useState<CalendarMonth>(new CalendarMonth(2025, 0));

  const updateCalendar = useCallback(async () => {
    const updatedCalendar = new CalendarMonth(calendar.year, calendar.month);

    const tasks = await taskService.fetchTasksMonth(
      userId,
      updatedCalendar.year,
      updatedCalendar.month
    );

    updatedCalendar.addTasks(tasks);

    setCalendar(updatedCalendar);
  }, [calendar, userId]);

  const updateTask = (task: Task) => {
    const updatedCalendar = new CalendarMonth(calendar.year, calendar.month, calendar.calendarDays);

    if (updatedCalendar.isTaskExists(task)) {
      updatedCalendar.updateTask(task);
    } else {
      updatedCalendar.addTask(task);
    }

    setCalendar(updatedCalendar);
  };

  const removeTask = (taskId?: number) => {
    if (!taskId) {
      return;
    }

    const updateCalendar = new CalendarMonth(calendar.year, calendar.month, calendar.calendarDays);

    updateCalendar.removeTaskById(taskId);

    setCalendar(updateCalendar);
  };

  useEffect(() => {
    setTitle(calendar.getMonthName());

    updateCalendar();
  }, [setTitle]);

  const handleKeyDow = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === "Escape") {
      setSelectedDay(undefined);
      closeTaskForm();
    }
  };

  return (
    <section id="content" tabIndex={0} onKeyDown={handleKeyDow}>
      <Calendar calendar={calendar} />
      <Panel calendar={calendar} callbackSave={updateTask} callbackRemove={removeTask} />
    </section>
  );
}
