import { randomUUID } from 'crypto';
import { Replace } from 'src/helpers/Replace';
import { Content } from './content';

interface NotificationProps {
  recipientId: string;
  content: Content;
  category: string;
  readAt?: Date | null;
  createdAt: Date;
}

type NotificationConstructorProps = Replace<
  NotificationProps,
  { createdAt?: Date }
>;

export class Notification {
  private _id: string;
  private props: NotificationProps;

  constructor(props: NotificationConstructorProps) {
    const createdAtDate = props.createdAt ?? new Date();

    const notificationProps = {
      ...props,
      createdAt: createdAtDate,
    };

    this._id = randomUUID();
    this.props = notificationProps;
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

  public set readAt(readAt: Date | null | undefined) {
    this.props.readAt = readAt;
  }

  public get readAt(): Date | null | undefined {
    return this.props.readAt;
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
}
