import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { GetapiService } from '../getapi.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  submitted = false;
  result: any;

  constructor(public route: Router, private api: GetapiService) {
  }

  ngOnInit() {
    this.api.getapi().subscribe((res) => {
      this.result = res;
      console.log(this.result)
    })
  }

  loginForm = new FormGroup({
    email: new FormControl('gcullrfordm@myspace.com', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  })
  get AllControls() {
    return this.loginForm.controls;
  }

  onSubmit() {
    let e = this.AllControls.email.value;
    let p = this.AllControls.password.value;
    this.submitted = true;

    for (var val in this.result) {
      if (e == this.result[val]['email']) {
        console.log("email ok")
        if (p == this.result[val]['password']) {
          console.log("pass ok");
          this.route.navigate(['admin-dash']);
          return alert("success")
        }
        else {
          return alert("Invalid password");
        }
      }
    }
  }
}



