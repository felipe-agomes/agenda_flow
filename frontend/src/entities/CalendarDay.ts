import Task from "./Task";

export default class CalendarDay {
  private _day: number;
  private _task: Task[];

  public constructor(day: number, task: Task[]) {
    this._day = day;
    this._task = task;
  }

  public get day() {
    return this._day;
  }

  public set day(value: number) {
    this._day = value;
  }

  public get task(): Task[] {
    return this._task;
  }

  public set task(value: Task[]) {
    this._task = value;
  }
}
