export default class Task {
  private id?: number;
  private title?: string;
  private description?: string;
  private dueAt?: Date;
  private createdAt?: Date;
  private completedAt: Date | null;
  private deletedAt: Date | null;

  public constructor(
    id: number | undefined,
    title: string | undefined,
    description: string | undefined,
    dueAt: Date | undefined,
    createdAt: Date | undefined,
    completedAt: Date | null,
    deletedAt: Date | null
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.dueAt = dueAt;
    this.createdAt = createdAt;
    this.completedAt = completedAt;
    this.deletedAt = deletedAt;
  }

  public getId() {
    return this.id;
  }

  public setId(value: number) {
    this.id = value;
  }

  public getTitle() {
    return this.title;
  }

  public setTitle(value: string) {
    this.title = value;
  }

  public getDescription() {
    return this.description;
  }

  public setDescription(value: string) {
    this.description = value;
  }

  public getDueAt() {
    return this.dueAt;
  }

  public setDueAt(value: Date) {
    this.dueAt = value;
  }

  public getCreatedAt() {
    return this.createdAt;
  }

  public setCreatedAt(value: Date) {
    this.createdAt = value;
  }

  public getCompletedAt(): Date | null {
    return this.completedAt;
  }

  public setCompletedAt(value: Date | null) {
    this.completedAt = value;
  }

  public getDeletedAt(): Date | null {
    return this.deletedAt;
  }

  public setDeletedAt(value: Date | null) {
    this.deletedAt = value;
  }
}
