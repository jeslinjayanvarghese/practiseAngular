import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DbService } from './../services/db/db.service';


@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {
  allData: any = [];

  constructor(private db: DbService, private router: Router) { }

  ngOnInit(): void {

    this.db.getUsers();
    this.db.getUserDataSubject().subscribe((data)=>{
      this.allData = data;
    })
    
  }


  editUser(userDetail: any, index: number) {
    this.router.navigate(['/profile/editUser/' + index]);
  }

  deleteUser(i: number) {
    this.db.removeUser(i);
    alert("User Deleted Successfully");
  }

}
