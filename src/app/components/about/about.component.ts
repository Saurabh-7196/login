import { Component } from '@angular/core';
import { GetapiService } from 'src/app/getapi.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  constructor( private api:GetapiService){}
  postapi(data:any){
    alert("Data inserted");
    console.log(data)
    this.api.postuser(data).subscribe((res)=>{console.warn(data)})
  }
}
