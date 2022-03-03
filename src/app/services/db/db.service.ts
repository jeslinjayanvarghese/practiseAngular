import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor() { }
  
  getMessages(){
    let msgStr =  localStorage.getItem('messages');
    let messages = JSON.parse(msgStr?msgStr:'[]');
    return messages;
  }

  saveMessages(messages:any){
    let msgstringified = JSON.stringify(messages);
    localStorage.setItem('messages',msgstringified);
  }
}
