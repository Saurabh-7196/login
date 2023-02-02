import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetapiService {
  private url = 'https://retoolapi.dev/tk9r2Z/r'
  constructor(private api: HttpClient) { }
  getapi() {
    return this.api.get<any>(this.url)
  }
}
