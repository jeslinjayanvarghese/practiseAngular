import { MessagesComponent } from './messages/messages.component';
import { ClockComponent } from './clock/clock.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
  {path:'clock', component:ClockComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
