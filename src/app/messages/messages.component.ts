import { MessageService } from './../message.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  msg:any='';
  // messages:any = [];

  constructor(private msgService: MessageService) { }

  ngOnInit(): void {  
  }
  sendMsg(){

    if(this.msg!==''){    

    this.msgService.msgsend(this.msg);
    console.log(this.msg);

    // localStorage.setItem("message",JSON.stringify(this.msg));
    // this.messages.push(this.msg);
    // console.log(this.msg);
    // this.msg='';
      window.location.reload();
    }
    
  }
}
