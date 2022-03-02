import { MessageService } from './../message.service';
import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

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
    if ((this.messages = [])) {
      this.messages = this.MessageService.getmsg();
      this.messages = JSON.parse(this.messages);
    } else {
      this.messages = JSON.parse(this.messages);
    }
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes['messages']) {
      // Do your logic here
      this.ngOnInit();
    }
  }
}
