import { DbService } from './services/db/db.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  allData:any=[];
  constructor(private db: DbService) { }

  userData(userData: any) {
      this.allData = this.db.getUser();
      this.allData.push(userData);
      // this.db.saveMessages(this.allData);
    }
}
