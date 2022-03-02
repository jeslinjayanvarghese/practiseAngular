import { MessageService } from './../message.service';
import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Output() sendData = new EventEmitter<any>();
  msg:any='';
  constructor(private msgService:MessageService) { }

  ngOnInit(): void {
  }
  sendMsg(){
    if(this.msg!==''){    
    this.sendData.emit(this.msg);
    this.msgService.msgsend(this.msg);
    console.log(this.msg);
    this.msg='';
    //  window.location.reload();
    }
    
  }

}
