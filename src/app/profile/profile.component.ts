import { DbService } from './../services/db/db.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  
  constructor(private db:DbService) {}
  ngOnInit(): void {
  }
}
