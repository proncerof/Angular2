import { Component, OnInit } from '@angular/core';
import { MessagesService } from "app/messages.service";
import { Message } from "app/message";
import { ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  message: Message;
  messages: Message[];

  constructor(private service: MessagesService, private route: ActivatedRoute) {
    this.messages = this.service.getMessages();
    this.route.params.subscribe((param:Params)=>this.message=this.service.getMessage(this.route.snapshot.params['id']));
  }

  ngOnInit() {
  }

}
