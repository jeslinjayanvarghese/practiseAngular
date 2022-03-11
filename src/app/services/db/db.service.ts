import { CookieService } from 'ngx-cookie-service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor(private cookie:CookieService) { }
  
  getMessages(){
    let msgStr = this.cookie.get('messages');
    let messages = JSON.parse(msgStr?msgStr:'[]');
    return messages;
  }

  saveMessages(messages:any){
    let msgstringified = JSON.stringify(messages);
    this.cookie.set('messages', msgstringified, { expires: 2, sameSite: 'Lax' });
  }

  getUser(){
    let userData = this.cookie.get('user');
    let users = JSON.parse(userData?userData:'[]');
    return users;
  }

  saveUser(user:any){
    let userstringified = JSON.stringify(user);
    this.cookie.set('user', userstringified, { expires: 2, sameSite: 'Lax' });
  }

}
