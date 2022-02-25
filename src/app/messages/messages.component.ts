import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  msg:any='';
  // m:any=[];
  messages:Array<{msg:any; time:any}> = [];
  time:any = 3.15;
  msgArray:(string|number)[] =[3.15,"Hi","Hope u r good","Awesome","Nice","Have a grt Day","Wonderful","Cold there?","Is it raining?","Are u free now?","How do you do?","What is you name?"];
  constructor() { }

  ngOnInit(): void {
  }
  sendMsg(){

    let i =Math.floor(Math.random()*10);
    console.log(i);
    if(this.msg!==''){
    console.log(this.msg);
    sessionStorage.setItem("message",this.msg);
    this.messages.push(this.msg,this.time);
    // this.messages.push(this.msgArray[i]);
    // this.m.push(this.msgArray[i]);
    this.msg='';
  }
    
  }
}