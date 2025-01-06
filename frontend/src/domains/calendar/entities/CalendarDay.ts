import Task from "../../task/entities/Task";

export default class CalendarDay {
  private _day: number;
  private _tasks: Task[];

  public constructor(day: number, task: Task[]) {
    this._day = day;
    this._tasks = task;
  }

  public get day() {
    return this._day;
  }

  public set day(value: number) {
    this._day = value;
  }

  public get tasks(): Task[] {
    return this._tasks;
  }

  public set tasks(value: Task[]) {
    this._tasks = value;
  }
}
