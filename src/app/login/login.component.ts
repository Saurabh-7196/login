import { Component } from '@angular/core';

import { FormBuilder,Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Route, Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public oemail:any='saurabh@gmail.com';
  public opass:any=123;
  submitted=false;
  
  constructor(private fd:FormBuilder,private route:Router){}
  loginForm=this.fd.group({
    email:['saurabh@gmail.com',[Validators.required,Validators.email]],//2-reactive forms ,making connection using schema
    password:['',[Validators.required]],
  })
  //3-validation:
  // in reactive forms each fiels are controls. to get each controls data use getter 

  get AllControls(){
   return this.loginForm.controls;
  }

  public e=this.AllControls.email;
  public p=this.AllControls.password;

  onSubmit(values:any){
    this.submitted=true;
    values.email
    console.warn(values.email);
    
    if(values.email==this.oemail&&values.password==this.opass){
      this.successNotification()
    }
  }
  
  successNotification() {
    Swal.fire('Hi', 'We have been informed!', 'success');
  }

  goApi(){
    this.route.navigate(['api'])
  }
}
