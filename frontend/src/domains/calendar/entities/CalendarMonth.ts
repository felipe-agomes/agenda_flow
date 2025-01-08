import CalendarDay from "./CalendarDay";
import Task from "../../task/entities/Task";

export default class CalendarMonth {
  private _date: Date;
  private _year: number;
  private _month: number;
  private _calendarDays: CalendarDay[];

  public constructor(
    year?: number,
    month?: number,
  ) {
    this._date = year && month ? new Date(year, month) : new Date();

    this._year = this._date.getFullYear();
    this._month = this._date.getMonth();
    this._calendarDays = this.createCalendarDays();
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

  private createCalendarDays() {
    const daysInMonth = new Date(this.year, this.month, 0).getDate();
    const calendarDays = Array.from({ length: daysInMonth }, (_, i) => {
      const day = i + 1;

      return new CalendarDay(day);
    });

    return calendarDays;
  }

  public getMonthName() {
    return new Intl.DateTimeFormat('pt-BR', { month: 'long' }).format(this._date);
  }

  public get year(): number {
    return this._year;
  }

  public set year(value: number) {
    this._year = value;
  }

  public get month(): number {
    return this._month;
  }

  public set month(value: number) {
    this._month = value;
  }

  public get calendarDays(): CalendarDay[] {
    return this._calendarDays;
  }

  public set calendarDays(value: CalendarDay[]) {
    this._calendarDays = value;
  }
}
