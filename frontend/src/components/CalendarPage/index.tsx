/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import CalendarContext from "../../contexts/CalendarContext";
import CalendarDay from "../../entities/CalendarDay";
import Task from "../../entities/Task";
import taskService from "../../services/taskService";
import Panel from "../Panel";
import "./CalendarPage.css";
import calendarUtils from "../../utils/calendarUtils";
import Calendar from "../Calendar";

export default function CalendarPage() {
  const USER = 9361; /* TODO: Aqui ta fixo, mas precisa criar um esquema de login*/

  const [tasks, setTasks] = useState<Task[]>([]);
  const [calendar, setCalendar] = useState<CalendarDay[]>([]);
  const { setTitle } = useContext(CalendarContext);

  const { daysInMonth, currentMonthName, currentMonth, currentYear } =
    calendarUtils.getCurrentMonthInfo(); // TODO: Por inquando, ele esta permitindo utilizar apenas do mes atual, mas precisa ajustar para poder selecionar o mes tambem

  useEffect(() => {
    const fetchData = async () => {
      setTitle(currentMonthName);

      const fetchedTasks = await taskService.fetchTasks(
        USER /* TODO: Aqui ta fixo, mas precisa criar um esquema de login*/,
        currentYear,
        currentMonth
      );
      setTasks(fetchedTasks);

      const updatedCalendar = Array.from({ length: daysInMonth }, (_, i) => {
        const day = i + 1;

        const tasks = fetchedTasks.filter((task) => {
          calendarUtils.isTaskForDay(task, day);
        });

        return new CalendarDay(day, tasks);
      });

      setCalendar(updatedCalendar);
    };

    fetchData();
  }, [currentMonth]);

  return (
    <section id="content">
      <Calendar calendar={calendar} />
      <Panel tasks={tasks} />
    </section>
  );
}
