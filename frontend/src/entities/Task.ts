export default class Task {
  private _id: number;
  private _day: number;
  private _title: string;
  private _description: string;

  public constructor(
    id: number,
    day: number,
    title: string,
    description: string
  ) {
    this._id = id;
    this._day = day;
    this._title = title;
    this._description = description;
  }

  public get id() {
    return this._id;
  }

  public set id(value: number) {
    this._id = value;
  }

  public get day() {
    return this._day;
  }

  public set day(value: number) {
    this._day = value;
  }

  public get title() {
    return this._title;
  }

  public set title(value: string) {
    this._title = value;
  }

  public get description() {
    return this._description;
  }

  public set description(value: string) {
    this._description = value;
  }
}
