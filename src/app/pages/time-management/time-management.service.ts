import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimeManagementService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    this.http.get('/getUsers', { responseType: 'text' });
    return this.http.get('/getUsers')
  }
}
