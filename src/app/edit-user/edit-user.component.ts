import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  editUserForm = new FormGroup({
    name: new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+$'),Validators.minLength(4)]),
    email: new FormControl('',[Validators.required,Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z-]+\\.[a-z]{2,4}$')]),
    age: new FormControl('',[Validators.required,Validators.maxLength(2),Validators.pattern('[0-9]+$')])
  })

  newUser(){
    console.log(this.editUserForm.value);
    alert("New User Added Successfully");
    let userData = this.editUserForm.value;
    
  }

  get name(){
    return this.editUserForm.get('name');
  }

  get email(){
    return this.editUserForm.get('email');
  }

  get age(){
    return this.editUserForm.get('age');
  }
}
