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
  botMessageArray: string[] = [
    'Hi',
    'Hope u r good',
    'Awesome',
    'Nice',
    'Have a grt Day',
    'Wonderful',
    'Cold there?',
    'Is it raining?',
    'Are u free now?',
    'How do you do?',
    'What is you name?',
  ];
  constructor(private DbService:DbService) {}

  ngOnInit(): void {
   this.allmessages = this.DbService.getMessages();
  }

  handleSendData(usermsg: any) {
    let botMsg = Math.floor(Math.random() * this.botMessageArray.length);
    let mymsg = {
      type: 'user',
      message: usermsg,
      sent: new Date(),
    };
    this.allmessages.push(mymsg);
    let sendmsg = {
      type: 'sender',
      message: this.botMessageArray[botMsg],
      sent: new Date(),
    };
    this.allmessages.push(sendmsg);
    this.DbService.saveMessages(this.allmessages);

  }
}
