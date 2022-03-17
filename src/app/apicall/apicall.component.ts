import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-apicall',
  templateUrl: './apicall.component.html',
  styleUrls: ['./apicall.component.css']
})
export class ApicallComponent implements OnInit {

  users:any=[];
  constructor(private http : HttpClient) { }

  ngOnInit(): void {
    this.getApi();
   
  }

  getApi(){
    return  this.http.get('https://jsonplaceholder.typicode.com/users')
    .subscribe(data => {
      this.users = data;
      console.log(this.users)
    });
  }

}
