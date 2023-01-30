import { Component } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private fd:FormBuilder){}
  loginForm=this.fd.group({
    email:['saurabh@gmail.com',[Validators.required,Validators.email]],
    password:['',[Validators.required]],
  })
}
