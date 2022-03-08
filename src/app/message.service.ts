import { DbService } from './services/db/db.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  constructor(private DbService: DbService) {}
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

  msgsend(usermsg: any) {
  this.allmessages = this.DbService.getMessages();
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
