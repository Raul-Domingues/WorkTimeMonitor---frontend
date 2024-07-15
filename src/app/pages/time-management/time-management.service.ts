import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/user.interface';
import { map, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimeManagementService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    debugger
    return this.http.get<User[]>('http://localhost:3001/getUsers');
  }
}
