import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  logoImg = 'assets/logo.png';

  constructor(private router: Router) {
   }

  ngOnInit() {
  }

  logOut(){
    this.router.navigate(['Login'])
  }

  redirectToHome(){
    this.router.navigate(['Overview'])
  }

}
