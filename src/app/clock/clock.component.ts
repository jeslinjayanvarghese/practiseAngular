import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import * as momenttz from 'moment-timezone';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {

  constructor() { }
  local:any='';
  ist:any=';'
  uk:any='';
  ngOnInit(): void {
    this.getLocalTime();
  }
  getLocalTime(){
    this.local = moment().format('MMMM Do YYYY, h:mm:ss a')
    console.log(this.local);
    this.ist = momenttz().tz("Asia/Calcutta").format('MMMM Do YYYY, h:mm:ss a');
    console.log(this.ist);
    this.uk =momenttz().tz("Europe/London").format('MMMM Do YYYY, h:mm:ss a');
    console.log(this.uk);
  }

}
