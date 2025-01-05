/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import CalendarDay from "../../entities/CalendarDay";
import Day from "../Day";
import "./Calendar.css";
import TamplateContext from "../../contexts/TamplateContext";
import calendarUtils from "../../utils/calendarUtils";
import taskService from "../../services/taskService";
import CalendarContext from "../../contexts/CalendarContext";
import Task from "../../entities/Task";

export default function Calendar() {
  const USER = 9361; /* TODO: Aqui ta fixo, mas precisa criar um esquema de login*/

  const { setTitle } = useContext(TamplateContext);
  const { selectedDay, setTasks } = useContext(CalendarContext);

  const [calendar, setCalendar] = useState<CalendarDay[]>([]); // TODO: Verificar se e realmente necessario esse useState

  const { daysInMonth, currentMonthName, currentMonth, currentYear } =
    calendarUtils.getCurrentMonthInfo(); // TODO: Quando ajustar para pegar o mes selecionado, alterar o nome das variaveis para selected... // TODO: Por inquando, ele esta permitindo utilizar apenas do mes atual, mas precisa ajustar para poder selecionar o mes tambem

  const fetchTasks = async () => {
    const fetchedTasks = await taskService.fetchTasksMonth(
          USER /* TODO: Aqui ta fixo, mas precisa criar um esquema de login*/,
          currentYear,
          currentMonth
        );

    return fetchedTasks;
  };

  const updatedCalendar = (fetchedTasks: Task[]) => {
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

    const fetchedTasks = await fetchTasks();

    const calendar = updatedCalendar(fetchedTasks);
    setCalendar(calendar);

    const tasks = calendarUtils.getAllTask(calendar);
    setTasks(tasks);
  };

  useEffect(() => {
    fetchData();
  }, [currentMonth]);

  useEffect(() => {
    const tasks = selectedDay ? calendarUtils.getTasks(calendar, selectedDay) : calendarUtils.getTasks(calendar);
    setTasks(tasks);
  }, [selectedDay]);

  return (
    <div id="calendar">
      {calendar.map((calendarDay) => {
        return <Day key={calendarDay.day} calendarDay={calendarDay} />;
      })}
    </div>
  );
}
