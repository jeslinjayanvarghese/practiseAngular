import { MessageService } from './../message.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewmsg',
  templateUrl: './viewmsg.component.html',
  styleUrls: ['./viewmsg.component.css']
})
export class ViewmsgComponent implements OnInit {
  //  message:any='';
    messages: any=[];


  // msgarray:any=[];

  constructor(private MessageService:MessageService) { }

  ngOnInit(): void {
    
      // setInterval(()=>{
      // this.message= localStorage.getItem('message');
    //  this.message= JSON.parse(JSON.stringify(localStorage.getItem('message')) || "[]");
             // console.log(sendmsg);

        // localStorage.setItem("message",JSON.stringify(this.msgarray));
        // if(!localStorage.getItem("message")|| JSON.parse(localStorage.getItem('message') || '{}').length ===0){
        //   localStorage.setItem("message",JSON.stringify(this.msgarray));
        // }

        // let msgstringified = JSON.parse(localStorage.getItem("message") || '{}');
        // localStorage.removeItem('message');
        // console.log(msgstringified);
        // this.message='';

        //  setInterval(()=>{
        this.messages = this.MessageService.getmsg();

        console.log(typeof(this.messages))
        console.log(this.messages)
        // if(this.messages){
          this.messages = JSON.parse(this.messages);
        // }
        // })



      }


      }


