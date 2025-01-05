/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";
import CalendarDay from "../../entities/CalendarDay";
import Day from "../Day";
import "./Calendar.css";
import TamplateContext from "../../contexts/TamplateContext";
import calendarUtils from "../../utils/calendarUtils";
import taskService from "../../services/taskService";
import CalendarContext from "../../contexts/CalendarContext";
import Task from "../../entities/Task";
import CalendarMonth from "../../entities/CalendarMonth";

export default function Calendar() {
  const { daysInMonth, currentMonthName, currentMonth, currentYear } =
    calendarUtils.getCurrentMonthInfo(); // TODO: Quando ajustar para pegar o mes selecionado, alterar o nome das variaveis para selected... // TODO: Por inquando, ele esta permitindo utilizar apenas do mes atual, mas precisa ajustar para poder selecionar o mes tambem
  const { setTitle } = useContext(TamplateContext);
  const { userId, selectedDay, setTasks, calendar, setCalendar } =
    useContext(CalendarContext);

  calendar.year = currentYear;
  calendar.month = currentMonth;

  const fetchTasks = async (calendar: CalendarMonth) => {
    const fetchedTasks = await taskService.fetchTasksMonth(
      userId,
      calendar.year,
      calendar.month
    );

    return fetchedTasks;
  };

  const getCalendarDay = (fetchedTasks: Task[]) => {
    const updatedCalendar = Array.from({ length: daysInMonth }, (_, i) => {
      const day = i + 1;

      const tasks = fetchedTasks.filter((task) => {
        return calendarUtils.isTaskForDay(task, day);
      });

      return new CalendarDay(day, tasks);
    });

    return updatedCalendar;
  };

  const fetchData = async () => {
    setTitle(currentMonthName);

    const fetchedTasks = await fetchTasks(calendar);

    calendar.calendarDays = getCalendarDay(fetchedTasks);
    setCalendar(calendar);

    const tasks = calendarUtils.getAllTask(calendar);
    setTasks(tasks);
  };

  useEffect(() => {
    fetchData();
  }, [currentMonth]);

  useEffect(() => {
    const tasks = selectedDay
      ? calendarUtils.getTasks(calendar, selectedDay)
      : calendarUtils.getTasks(calendar);
    setTasks(tasks);
  }, [selectedDay]);

  return (
    <div id="calendar">
      {calendar.calendarDays.map((calendarDay) => {
        return <Day key={calendarDay.day} calendarDay={calendarDay} />;
      })}
    </div>
  );
}
