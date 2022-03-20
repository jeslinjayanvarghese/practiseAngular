import { BehaviorSubject } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DbService {
  user:any=[];

  private userDataSubject:BehaviorSubject<any>;
  
  constructor(private cookie:CookieService) { 
    this.userDataSubject = new BehaviorSubject(this.getUsers());
    }

  
  getMessages(){
    let msgStr = this.cookie.get('messages');
    let messages = JSON.parse(msgStr?msgStr:'[]');
    return messages;
  }

  saveMessages(messages:any){
    let msgstringified = JSON.stringify(messages);
    this.cookie.set('messages', msgstringified, { expires: 2, sameSite: 'Lax' });
  }

  getUsers(){
    let userData = this.cookie.get('user');
    let users = JSON.parse(userData?userData:'[]');
    return users; 
  }

  getUser(id:any){
    let userData = this.cookie.get('user');
    let users = JSON.parse(userData?userData:'[]');
    return users[id];
  }

  saveUser(userDetails:any){
    this.user =this.getUsers();
    this.user.push(userDetails);
    let userstringified = JSON.stringify(this.user);
    this.cookie.set('user', userstringified, { expires: 2, sameSite: 'Lax' });
    this.userDataSubject.next(this.user);
  }

  updateUser(userDetails:any, index:number){
    this.user[index]=userDetails;
    let userstringified = JSON.stringify(this.user);
    this.cookie.set('user', userstringified, { expires: 2, sameSite: 'Lax' });
    this.userDataSubject.next(this.user);
  }


  removeUser(index:number){
    this.user = this.getUsers();
    if (index>-1) {
      let result = this.user.splice(index,1);
    }
    let userstringified = JSON.stringify(this.user);
    this.cookie.set('user', userstringified, { expires: 2, sameSite: 'Lax' });
    this.userDataSubject.next(this.user);
  }

  getUserDataSubject(){
    return this.userDataSubject;
  }

}
