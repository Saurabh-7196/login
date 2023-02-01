import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  submitted = false;

  constructor(private fd: FormBuilder, public route: Router) {
  }

  loginForm = new FormGroup({
    email: new FormControl('saurabh@gmail.com', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  })

  get AllControls() {
    return this.loginForm.controls;
  }

  onSubmit() {

    this.submitted = true;
    // console.log(this.loginForm.get('email')?.value)
    // console.log(this.loginForm.get('password')?.value)

    // console.log(this.loginForm.value.email)
    // console.log(this.loginForm.value.password)
    let e = this.AllControls.email.value;
    let p = this.AllControls.password.value;

    // console.log(this.AllControls.email.value)
    // console.log(this.AllControls.password.value)
    console.log(e);
    console.log(p);


    if (!this.auth(e, p)) {
      return alert("Invalid email or password");
    }
    else {
      this.route.navigate(['admin-dash']);

    }
  }
  auth(e: any, p: any) {
    if ((e == 'saurabh@gmail.com') && (p == '123')) {
      console.log('true')
      return true;
    }
    else {
      console.log('fasle')
      return false;
    }
  }
}



