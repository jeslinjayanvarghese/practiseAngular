import { DbService } from './services/db/db.service';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessageService } from './message.service';
import { CookieService } from 'ngx-cookie-service';


import { CommonModule } from '@angular/common';
import { MessagesComponent} from './messages/messages.component'
import { InputComponent } from './input/input.component';
import { ViewmsgComponent } from './viewmsg/viewmsg.component';
import { ClockComponent } from './clock/clock.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule  } from '@angular/material/sidenav';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule} from '@angular/material/icon';
import { MatDividerModule} from '@angular/material/divider';


@NgModule({
  declarations: [
    AppComponent,
    ViewmsgComponent,
    MessagesComponent,
    InputComponent,
    ClockComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatDividerModule,
    MatFormFieldModule,
    HttpClientModule,
    FormsModule,
  ],
  exports: [],
  providers: [MessageService,DbService,CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
