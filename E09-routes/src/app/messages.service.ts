import { Injectable } from '@angular/core';
import { Message } from './message'

@Injectable()
export class MessagesService {

  messages: Message[] = [];

  constructor() { 
    this.messages.push(new Message(1,"Primero", "Primer Mensaje"));
    this.messages.push(new Message(2,"Segundo", "Segundo Mensaje"));
    this.messages.push(new Message(3,"Tercero", "Tercer Mensaje"));

  }

  getMessages():Message[]{
    return this.messages;
  }

  getMessage(id:number):Message{
    return this.messages.find(m=>m.id==id);
  }



}
