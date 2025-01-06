import Calendar from "../entities/CalendarMonth";
import Task from "../../task/entities/Task";

type MonthInfo = {
  daysInMonth: number;
  currentMonthName: string;
  currentMonth: number;
  currentYear: number;
};

const calendarUtils = {
  getCurrentMonthInfo: (): MonthInfo => {
    const now = new Date();
    const currentYear = now.getFullYear();
    const currentMonth = now.getMonth() + 1;
    const daysInMonth = new Date(currentYear, currentMonth, 0).getDate();
    const currentMonthName = now.toLocaleString("default", { month: "long" });

    return {
      daysInMonth,
      currentMonthName,
      currentMonth,
      currentYear,
    };
  },

  getTasks: (calendar: Calendar, selectedDay?: number) => {
    return selectedDay
      ? calendar.calendarDays.find(({ day }) => day === selectedDay)?.tasks ?? []
      : calendarUtils.getAllTask(calendar);
  },

  getAllTask: (calendar: Calendar): Task[] => {
    const tasks: Task[] = [];

    for (const calendarDay of calendar.calendarDays) {
      for (const task of calendarDay.tasks) {
        tasks.push(task);
      }
    }

    return tasks;
  },

  isTaskForDay: (task: Task, day: number) => {
    return task.dueAt.getDate() === day;
  },

  addTaskOnCalendar: (calendar: Calendar, task: Task) => {
    for (const calendarDay of calendar.calendarDays) {
      if (calendarDay.day === task.dueAt.getDay()) {
        calendarDay.tasks.push(task);
      }
    }

    return calendar;
  }
};

export default calendarUtils;
