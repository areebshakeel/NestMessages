import { Module } from '@nestjs/common';
import { MessagesRepository } from './messages.repository';
import { MessagesService } from './messages.service';
import { MessagesController } from './messsages.controller';
@Module({
  controllers: [MessagesController],
  providers:[MessagesRepository,MessagesService]
})
export class MessagesModule {}
  