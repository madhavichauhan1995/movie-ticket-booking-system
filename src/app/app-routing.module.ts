import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {TicketBookComponent} from './ticket-book/ticket-book.component'

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'Login', component: LoginComponent },
  { path:'Overview',component:TicketBookComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
