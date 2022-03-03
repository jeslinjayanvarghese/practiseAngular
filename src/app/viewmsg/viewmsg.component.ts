import { MessageService } from './../message.service';
import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-viewmsg',
  templateUrl: './viewmsg.component.html',
  styleUrls: ['./viewmsg.component.css'],
})
export class ViewmsgComponent implements OnInit {
  @Input() msg: any = [];

  constructor(private MessageService: MessageService) {}

  ngOnInit(): void {
  }
}
