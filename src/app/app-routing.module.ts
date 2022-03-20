import { MessagesComponent } from './messages/messages.component';
import { ClockComponent } from './clock/clock.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { ApicallComponent } from './apicall/apicall.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {
    path: 'chats',
    component: MessagesComponent,
  },
  { path: '', redirectTo: '/chats', pathMatch: 'full' },

  { path: 'clock', component: ClockComponent },

  {
    path: 'profile', component: ProfileComponent,
    children: [
      {
        path: 'addUser',
        component: AddUserComponent,
      },
      {
        path: 'editUser/:id',
        component: AddUserComponent,
      },
      {
        path: '',
        component: ViewUserComponent,
      },

    ],

  },
  { path: 'api', component: ApicallComponent },
  {path: '404', component: NotfoundComponent},
  {path: '**', redirectTo: '/404'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
