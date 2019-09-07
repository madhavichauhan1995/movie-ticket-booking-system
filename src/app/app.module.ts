import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './/app-routing.module';
import { TicketBookComponent } from './ticket-book/ticket-book.component';
import { LayoutComponent } from './layout/layout.component';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TicketBookComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
