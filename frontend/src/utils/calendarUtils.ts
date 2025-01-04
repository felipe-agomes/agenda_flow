import Task from "../entities/Task";

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

  isTaskForDay: (task: Task, day: number): boolean => {
    return task.dueAt.getDate() === day;
  },
};

export default calendarUtils;
