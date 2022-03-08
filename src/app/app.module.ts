import { DbService } from './services/db/db.service';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { MessagesModule } from './messages/messages.module';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessageService } from './message.service';
import { CookieService } from 'ngx-cookie-service';



import { FormsModule } from '@angular/forms';
import { MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
 
    MessagesModule
  ],
  exports: [],
  providers: [MessageService,DbService,CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
