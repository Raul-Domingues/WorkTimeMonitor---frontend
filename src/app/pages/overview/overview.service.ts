import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WorkHoursSummary } from '../../models/work-hours-summary.interface';

@Injectable({
  providedIn: 'root'
})
export class OverviewService {

  constructor(private http: HttpClient) { }

  getWorkHoursSummary(month_year: string) {
    return this.http.get<WorkHoursSummary>(`http://localhost:3001/getWorkHoursSummary/${month_year}`);
  }
}
