import { Body, Controller, Get, Post } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CreateNotificationBody } from '../dtos/create-notification-body';
import { PrismaService } from '../prisma.service';

@Controller('notifications')
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  async list() {
    const notifications = await this.prisma.notification.findMany();
    return notifications;
  }

  @Post()
  async create(@Body() body: CreateNotificationBody) {
    const UUID = randomUUID();

    await this.prisma.notification.create({
      data: {
        id: UUID,
        category: body.category,
        content: body.content,
        recipientId: body.recipientId,
      },
    });
  }
}
