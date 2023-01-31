import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public orgE: any = 'saurabh@gmail.com';
  public orgP: any = 123;
  submitted = false;

  constructor(private fd: FormBuilder) {
  }

  loginForm = new FormGroup({
    email: new FormControl('saurabh@gmail.com', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  })

  get AllControls() {
    return this.loginForm.controls;
  }

  public e = this.AllControls.email;
  public p = this.AllControls.password;

  onSubmit() {
    console.log(this.loginForm.value)
    this.submitted = true;
    // if (this.e == this.orgE && this.p == this.orgP) {
    //   console.log(this.e)
    // }
  }
  successNotification() {
    Swal.fire('Hi', 'We have been informed!', 'success');
  }
}



