import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../messages.service';
import { Message } from '../message';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  messages:Message[];

  constructor(public service:MessagesService) {
    this.messages = this.service.getMessages();
  }

  ngOnInit() {
  }
}
