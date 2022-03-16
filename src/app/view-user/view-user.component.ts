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
  allData$: any;
  user: any;
  i: any;
  constructor(private db: DbService, private router: Router) { }



  ngOnInit(): void {

    this.db.refreshNeeded$.subscribe(() => {
      this.allData = this.db.getUsers();
    })
    this.allData = this.db.getUsers();
  }



  editUser(userDetail: any, index: number) {
    this.router.navigate(['/profile/editUser/' + index]);
  }

  deleteUser(i: number) {
    this.db.removeUser(i);
    alert("User Deleted Successfully");
    // this.ngOnInit();
  }

}
