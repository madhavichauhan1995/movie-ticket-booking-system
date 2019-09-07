import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName: any = "test@123";
  password: any = 'Password#123';
  valForm: FormGroup;
  errorMessage: any = '';

  constructor(fb: FormBuilder, private router: Router) {
    this.valForm = fb.group({
      'email': [null, Validators.required],
      'password': [null, Validators.required],
    });
  }

  ngOnInit() {

  }

  getPath() {
    return "url('assets/background.jpeg')";
  }
  submitForm($ev, value: any) {

    $ev.preventDefault();
    for (let c in this.valForm.controls) {
      this.valForm.controls[c].markAsTouched();
    }
    if (this.valForm.valid) {
      if (this.userName == value.email && this.password == value.password) {
        this.router.navigate(['Overview'])
      } else {
        this.errorMessage = "Invalid UserName / Password"
      }
    }

  }

  resetLogin(){
    this.valForm.setValue({
      'email': '',
      'password': '',
    })
  }

}
