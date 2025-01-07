import CalendarDay from "./CalendarDay";

export default class CalendarMonth {
  private _year?: number;
  private _month?: number;
  private _calendarDays: CalendarDay[];

  public constructor(year?: number, month?: number, calendarDays?: CalendarDay[]) {
    this._year = year;
    this._month = month;
    this._calendarDays = calendarDays ? calendarDays : [];
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