import CalendarDay from "./CalendarDay";
import Task from "../../task/entities/Task";

export default class CalendarMonth {
  private _year?: number;
  private _month?: number;
  private _calendarDays: CalendarDay[];

  public constructor(
    year?: number,
    month?: number,
    calendarDays?: CalendarDay[]
  ) {
    this._year = year;
    this._month = month;
    this._calendarDays = calendarDays ? calendarDays : [];
  }

  public getAllTasks(): Task[] {
    const tasks: Task[] = [];
    for (const calendarDay of this._calendarDays) {
      tasks.push(...calendarDay.tasks);
    }

    return tasks;
  }

  public getTasksDay(day: number) {
    const allTasks = this.getAllTasks();
    const tasks: Task[] = allTasks.filter((task) => this.isTaskForDay(task, day));

    return tasks;
  }


  public isTaskForDay(task: Task, day: number) {
    return task.dueAt.getDate() === day;
  }

  public setTasks(tasks: Task[]) {
    for (const calendarDay of this.calendarDays) {
      for (const task of tasks) {
        if (this.isTaskForDay(task, calendarDay.day)) {
          calendarDay.tasks.push(task);
        }
      }
    }
  }

  public static createCalendarDays(daysInMonth: number) {
    const calendarDays = Array.from({ length: daysInMonth }, (_, i) => {
      const day = i + 1;

      return new CalendarDay(day);
    });

    return calendarDays;
  }

  public static getMonthInfo(year: number, month: number) {
    const date = new Date(year, month - 1);
    const daysInMonth = new Date(year, month, 0).getDate();
    const monthName = date.toLocaleString("default", { month: "long" });

    return {
      year,
      month,
      monthName,
      daysInMonth,
    };
  }

  public get year(): number | undefined {
    return this._year;
  }

  public set year(value: number | undefined) {
    this._year = value;
  }

  public get month(): number | undefined {
    return this._month;
  }

  public set month(value: number | undefined) {
    this._month = value;
  }

  public get calendarDays(): CalendarDay[] {
    return this._calendarDays;
  }

  public set calendarDays(value: CalendarDay[]) {
    this._calendarDays = value;
  }
}
