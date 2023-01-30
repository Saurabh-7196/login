import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GetapiService {
  constructor(private api: HttpClient) {}
  getuser() {
    return this.api.get<any>('https://jsonplaceholder.typicode.com/posts');
  }
}
