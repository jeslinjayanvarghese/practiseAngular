import { DbService } from './../services/db/db.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent implements OnInit {
  addUserForm: FormGroup;
  user: any = [];
  id: string = '';
  userDetails: any = [];
  userUpdatedData: any = [];

  constructor(
    private db: DbService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.addUserForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-zA-Z]+$'),
        Validators.minLength(4),
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z-]+\\.[a-z]{2,4}$'),
      ]),
      age: new FormControl('', [
        Validators.required,
        Validators.maxLength(2),
        Validators.pattern('[0-9]+$'),
      ]),
    });
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')!;
    this.user = this.db.getUser(this.id);
    this.addUserForm.patchValue(this.user);
  }

  //adding a new user and update
  newUser() {
    this.userDetails = this.addUserForm.value;
    if (this.id) {
      this.db.updateUser(this.userDetails, +this.id);
    } else {
      this.db.saveUser(this.userDetails);
      alert('New User Added Successfully');
    }
    this.router.navigate(['/profile']);
  }

  get name() {
    return this.addUserForm.get('name');
  }

  get email() {
    return this.addUserForm.get('email');
  }

  get age() {
    return this.addUserForm.get('age');
  }
}
