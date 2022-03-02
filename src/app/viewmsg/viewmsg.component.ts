import { MessageService } from './../message.service';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-viewmsg',
  templateUrl: './viewmsg.component.html',
  styleUrls: ['./viewmsg.component.css'],
})
export class ViewmsgComponent implements OnInit {
  @Input() messages: any = [];
  // messages: any = [];

  constructor(private MessageService: MessageService) {}

  ngOnInit(): void {
    this.messages = this.MessageService.getmsg();
    this.messages = JSON.parse(this.messages);
  }
  
  
}
