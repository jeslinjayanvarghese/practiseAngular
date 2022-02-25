import { Component, OnInit } from '@angular/core';


interface ViewmsgModel{
id:String;
sent: Date;
text: String;
user: {
  name: String;
};
fromYou: boolean;
}

@Component({
  selector: 'app-viewmsg',
  templateUrl: './viewmsg.component.html',
  styleUrls: ['./viewmsg.component.css']
})
export class ViewmsgComponent implements OnInit {
  message:any='';
  sendArray:(string|number)[] =["Hi","Hope u r good","Awesome","Nice","Have a grt Day","Wonderful","Cold there?","Is it raining?","Are u free now?","How do you do?","What is you name?"];
  msgarray:any=[];

  constructor() { }

  ngOnInit(): void {
    
    setInterval(()=>{
      this.message=sessionStorage.getItem('message');
      if(this.message){
        let msg ={
          type:'user',
          message: this.message,
          sent: new Date()
        }
        this.msgarray.push(msg);
        let i =Math.floor(Math.random()*10);
        console.log(i);
        let sendmsg={
          type:'sender',
          message: this.sendArray[i],
          sent: new Date()
        }
        this.msgarray.push(sendmsg);
        console.log(sendmsg)
        this.message='';
        sessionStorage.removeItem('message');
        console.log(this.msgarray);
      }
    })

      }

}