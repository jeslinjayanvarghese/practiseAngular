import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  constructor() {}
  messages: any = [];
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

 
  

  msgsend(event: any) {

    
    this.messages = this.getmsg();
    console.log(this.messages)
    let botMsg = Math.floor(Math.random() * this.botMessageArray.length);


    if (this.messages) {
      this.messages = JSON.parse(this.messages);
    } else {
      this.messages = [];
    }
    let mymsg = {
      type: 'user',
      message: event,
      sent: new Date(),
    };
    this.messages.push(mymsg);
    let sendmsg = {
      type: 'sender',
      message: this.botMessageArray[botMsg],
      sent: new Date(),
    };
    this.messages.push(sendmsg);
    this.savemsg();
    console.log(this.messages)
  }

  getmsg() {
    return localStorage.getItem('messages');
  }
  savemsg(){
    localStorage.setItem('messages', JSON.stringify(this.messages));
}
}
