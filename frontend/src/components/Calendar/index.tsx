/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import CalendarContext from "../../contexts/CalendarContext";
import CalendarDay from "../../entities/CalendarDay";
import Task from "../../entities/Task";
import taskService from "../../services/taskService";
import { getCurrentMonthInfo } from "../../utils/calendarUtils";
import Day from "../Day";
import Panel from "../Panel";
import "./Calendar.css";

export default function Calendar() {
  const USER = 1; /* TODO: Aqui ta fixo, mas precisa criar um esquema de login*/

  const [tasks, setTasks] = useState<Task[]>([]);
  const [calendar, setCalendar] = useState<CalendarDay[]>([]);
  const { setTitle } = useContext(CalendarContext);

  const { daysInMonth, currentMonthName, currentMonth } = getCurrentMonthInfo(); // TODO: Por inquando, ele esta permitindo utilizar apenas do mes atual, mas precisa ajustar para poder selecionar o mes tambem

  useEffect(() => {
    const fetchData = async () => {
      setTitle(currentMonthName);

      const fetchedTasks = await taskService.fetchTasks(
        USER /* TODO: Aqui ta fixo, mas precisa criar um esquema de login*/,
        currentMonth
      );
      setTasks(fetchedTasks);

      const updatedCalendar = Array.from({ length: daysInMonth }, (_, i) => {
        const task = fetchedTasks.filter((task) => task.day === i + 1);
        return new CalendarDay(i + 1, task);
      });

      setCalendar(updatedCalendar);
    };

    fetchData();
  }, [currentMonth]);

  return (
    <section id="content">
      <div id="calendar">
        {calendar.map((calendarDay) => {
          return <Day key={calendarDay.day} calendarDay={calendarDay} />;
        })}
      </div>
      <Panel tasks={tasks} />
    </section>
  );
}
