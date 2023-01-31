import { Component } from '@angular/core';
import { GetapiService } from '../getapi.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent {
  details:any;
  constructor(private data:GetapiService){}
  ngOnInit(){
    this.data.getapi().subscribe((res)=>{this.details=res})
  }
}
