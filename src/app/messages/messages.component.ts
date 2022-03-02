import { MessageService } from './../message.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
})
export class MessagesComponent implements OnInit {
  msg: any[] = [];
  // note: any = 'Chat with ur ChatBot';
  constructor(private msgService: MessageService) {}

  ngOnInit(): void {
    this.msgService.getmsg();
  }
  handleSendData(event: any) {
    this.msg = event;
    console.log(this.msg);
    // this.msg = [];
  }
}
