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

  submitted: boolean = false;
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
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  })
  get AllControls() {
    return this.loginForm.controls;
  }

  onSubmit() {
    var e = this.AllControls.email.value;
    var p = this.AllControls.password.value;
    this.submitted = true;

    for (var val in this.result) {
      if (e == this.result[val]['email']) {
        console.log("email ok")
        if (p == this.result[val]['password']) {
          console.log("pass ok");
          // this.save();
          this.route.navigate(['admin-dash/home']);
          return alert("success")
        }
        else {
          return alert("Invalid password");
        }
      }
      // else {
      //   console.log(e)
      //   console.log(this.result[val]['email'])
      //   return alert("invalid email")
      // }
    }
    return alert("Invalid email or password")
  }
  // save(){
  //   let d=this.result['email']
  //   // console.log(d)
  //   sessionStorage.setItem('email',d.value);
  // }
}



