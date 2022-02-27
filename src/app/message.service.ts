import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }

  messages:any=[];
  // messages:Array<{type:any,message:any,sent:any}> = [];
  sendArray:(string)[] =["Hi","Hope u r good","Awesome","Nice","Have a grt Day","Wonderful","Cold there?","Is it raining?","Are u free now?","How do you do?","What is you name?"];
  
  msgsend(msgs:any){

   

  //  this.messages = JSON.parse(JSON.stringify(localStorage.getItem("message"))) || [];
  //  this.messages = !!localStorage.getItem("message") ? JSON.stringify((localStorage.getItem("message"))): [];
  this.messages = this.getmsg();
  if(this.messages){
    this.messages = JSON.parse(this.messages);
  }
  else{
    this.messages=[];
  }
  
    let msg ={
      type:'user',
      message: msgs,
      sent: new Date()
    }
    console.log(msg);
    console.log(this.messages);
     this.messages.push(msg)
  // this.messages[this.messages.length]=msg;

console.log(this.messages);

    //to randomly select the sendArray messages
    let i =Math.floor(Math.random()*10);
    console.log(i);

    let sendmsg={
      type:'sender',
      message: this.sendArray[i],
      sent: new Date()
    }
     this.messages.push(sendmsg);
    // this.messages[this.messages.length]=sendmsg;
    console.log(this.messages);

     localStorage.setItem("messages",JSON.stringify(this.messages));
    // localStorage['messages'] = JSON.stringify(this.messages);
}

getmsg(){
  return localStorage.getItem("messages");
}

}
