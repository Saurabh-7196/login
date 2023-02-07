import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetapiService {
  private url = 'https://retoolapi.dev/Ev20G1/data'
  constructor(private api: HttpClient) { }
  getapi() {
    return this.api.get<any>(this.url)
  }
  postuser(values:any){
    return this.api.post<any>('https://retoolapi.dev/Ev20G1/data',values)
  }
}
