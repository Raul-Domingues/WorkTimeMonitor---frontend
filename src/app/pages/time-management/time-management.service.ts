import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/user.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimeManagementService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:3001/getUsers');
  }

  saveHoursWorked(user_id: number, month_year: number, hours_worked: number) {
    return this.http.post('http://localhost:3001/saveHoursWorked', { user_id, month_year, hours_worked });
  }
}
