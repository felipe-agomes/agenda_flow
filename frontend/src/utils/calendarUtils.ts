import CalendarDay from "../entities/CalendarDay";
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

  getTasks: (calendar: CalendarDay[], selectedDay?: number): Task[] => {
    return selectedDay
      ? calendar.find(({ day }) => day === selectedDay)?.tasks ?? []
      : calendarUtils.getAllTask(calendar);
  },

  getAllTask: (calendar: CalendarDay[]): Task[] => {
    const tasks: Task[] = [];

    for (const calendarDay of calendar) {
      for (const task of calendarDay.tasks) {
        tasks.push(task);
      }
    }

    return tasks;
  },

  isTaskForDay: (task: Task, day: number): boolean => {
    return task.dueAt.getDate() === day;
  },
};

export default calendarUtils;
