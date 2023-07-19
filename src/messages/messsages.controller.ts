import { Controller, Get, Post, Body, Param,NotFoundException } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-messages.dto';
import { MessagesService } from './messages.service';
@Controller('messages')
export class MessagesController {
    constructor(public messagesService:MessagesService ){
        // Do not use this in real App
        // Use Dependency Injection
    } 
    @Get()  
    listMessages(){
        return this.messagesService.findAll();
    }
 
    @Post()
  async  createMessage(@Body() body:CreateMessageDto){
        console.log("My body here -->> ",body)
        return this.messagesService.create(body.content)
    } 

    @Get("/:id")
   async getMessage(@Param("id") id:string){
        const msg = await  this.messagesService.findOne(id)
        if (!msg){
            throw new NotFoundException("Message not found")
        }
        return this.messagesService.findOne(id)
    }
     
}
