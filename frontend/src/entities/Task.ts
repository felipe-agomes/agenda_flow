export default class Task {
  private _id: number;
  private _title: string;
  private _description: string;
  private _dueAt: Date;
  private _createdAt: Date;
  private _completedAt: Date;
  private _deletedAt: Date;

  public constructor(
    id: number,
    title: string,
    description: string,
    dueAt: Date,
    createdAt: Date,
    completedAt: Date,
    deletedAt: Date
  ) {
    this._id = id;
    this._title = title;
    this._description = description;
    this._dueAt = dueAt;
    this._createdAt = createdAt;
    this._completedAt = completedAt;
    this._deletedAt = deletedAt;
  }

  public get id() {
    return this._id;
  }

  public set id(value: number) {
    this._id = value;
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

  public get dueAt() {
    return this._dueAt;
  }

  public set dueAt(value: Date) {
    this._dueAt = value;
  }

  public get createdAt() {
    return this._createdAt;
  }

  public set createdAt(value: Date) {
    this._createdAt = value;
  }

  public get completedAt() {
    return this._completedAt;
  }

  public set completedAt(value: Date) {
    this._completedAt = value;
  }

  public get deletedAt() {
    return this._deletedAt;
  }

  public set deletedAt(value: Date) {
    this._deletedAt = value;
  }
}
