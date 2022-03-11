import { MessagesComponent } from './messages/messages.component';
import { ClockComponent } from './clock/clock.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';

const routes: Routes = [
  {
    path: 'chats',
    component: MessagesComponent,
    // children: [
    //   {
    //     path: 'clock',
    //     component: ClockComponent,
    //   },
    // ],
  },
  { path: '', redirectTo: '/chats', pathMatch: 'full' },
  {path:'clock', component:ClockComponent },
  {path:'profile', component:ProfileComponent,
    children: [
      {
        path: 'addUser',
        component: AddUserComponent,
      },
      {
        path: 'editUser',
        component: EditUserComponent,
      },
    ],

   },
  // {path:'addUser', component:AddUserComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
