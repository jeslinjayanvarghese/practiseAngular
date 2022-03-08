
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesComponent } from './messages.component';
import { InputComponent } from '../input/input.component';
import { ViewmsgComponent } from '../viewmsg/viewmsg.component';
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
    ViewmsgComponent,
    MessagesComponent,
    InputComponent
  ],
  imports: [
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
  ]
})
export class MessagesModule { }
