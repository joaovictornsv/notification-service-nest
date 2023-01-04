import { randomUUID } from 'crypto';
import { Replace } from 'src/helpers/Replace';
import { Content } from './content';

export interface NotificationProps {
  recipientId: string;
  content: Content;
  category: string;
  readAt?: Date | null;
  canceledAt?: Date | null;
  createdAt: Date;
}

type NotificationConstructorProps = Replace<
  NotificationProps,
  { createdAt?: Date }
>;

export class Notification {
  private _id: string;
  private props: NotificationProps;

  constructor(props: NotificationConstructorProps, id?: string) {
    this._id = id ?? randomUUID();
    this.props = this.buildNotificationProps(props);
  }

  public set recipientId(recipientId: string) {
    this.props.recipientId = recipientId;
  }

  public get recipientId() {
    return this.props.recipientId;
  }

  public set content(content: Content) {
    this.props.content = content;
  }

  public get content() {
    return this.props.content;
  }

  public set category(category: string) {
    this.props.category = category;
  }

  public get category() {
    return this.props.category;
  }

  public get readAt(): Date | null | undefined {
    return this.props.readAt;
  }

  public read() {
    this.props.readAt = new Date();
  }

  public unread() {
    this.props.readAt = null;
  }

  public get canceledAt(): Date | null | undefined {
    return this.props.canceledAt;
  }

  public cancel() {
    this.props.canceledAt = new Date();
  }

  public set createdAt(createdAt: Date) {
    this.props.createdAt = createdAt;
  }

  public get createdAt(): Date {
    return this.props.createdAt;
  }

  public get id() {
    return this._id;
  }

  private buildNotificationProps(props: NotificationConstructorProps) {
    const createdAtDate = props.createdAt ?? new Date();

    const notificationProps = {
      ...props,
      createdAt: createdAtDate,
    };

    return notificationProps;
  }
}
