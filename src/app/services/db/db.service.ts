import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DbService {
  user:any=[];
  
  constructor(private cookie:CookieService) {   }
  private _refreshNeeded$ = new Subject<void>();

  get refreshNeeded$(){
    return this._refreshNeeded$;
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
    this.getUsers();
  }

  updateUser(userDetails:any, index:number){
    this.user[index]=userDetails;
    let userstringified = JSON.stringify(this.user);
    this.cookie.set('user', userstringified, { expires: 2, sameSite: 'Lax' });
  }


  removeUser(index:number){
    this.user = this.getUsers();
    if (index>-1) {
      let result = this.user.splice(index,1);
      console.log(result);
    }
    let userstringified = JSON.stringify(this.user);
    this.cookie.set('user', userstringified, { expires: 2, sameSite: 'Lax' });
    return this.user.tap(this._refreshNeeded$.next());
    // return this.user.pipe(tap()=>{this._refreshNeeded$.next()});
      
    
  }

}
