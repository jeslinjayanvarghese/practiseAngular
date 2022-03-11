import { DbService } from './../services/db/db.service';
import { MatIconModule } from '@angular/material/icon';
import { UserDataService } from './../user-data.service';
import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private userService: UserDataService,private db:DbService) { }
  userDetails:any [] = this.db.getUser();

  ngOnInit(): void {
    this.userDetails=this.db.getUser();
    console.log(this.userDetails)
  }

  addUserForm = new FormGroup({
    id:new FormControl([0]),
    name: new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+$'),Validators.minLength(4)]),
    email: new FormControl('',[Validators.required,Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z-]+\\.[a-z]{2,4}$')]),
    age: new FormControl('',[Validators.required,Validators.maxLength(2),Validators.pattern('[0-9]+$')])
  })

  newUser(){
    console.log(this.addUserForm.value);
    alert("New User Added Successfully");
    this.userDetails = this.addUserForm.value;
    this.db.saveUser(this.userDetails);
    // this.addUserForm.reset();
  }

  get name(){
    return this.addUserForm.get('name');
  }

  get email(){
    return this.addUserForm.get('email');
  }

  get age(){
    return this.addUserForm.get('age');
  }



}
