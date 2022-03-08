import { DbService } from './../services/db/db.service';
import { MessageService } from './../message.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
})
export class MessagesComponent implements OnInit {
  allmessages: any = [];

  constructor(private DbService:DbService,private MsgService: MessageService) {}

  ngOnInit(): void {
    this.allmessages =this.DbService.getMessages();
  }

  
  handleSendData(usermsg: any) {
    this.MsgService.msgsend(usermsg);
    this.getMessage();
  }


  getMessage(){
    this.allmessages = this.DbService.getMessages();
  }
}
