import { Component, OnInit } from '@angular/core';
import { TimeManagementService } from './time-management.service';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-time-management',
  templateUrl: './time-management.component.html',
  styleUrl: './time-management.component.scss'
})
export class TimeManagementComponent implements OnInit {

  users: string[] = [];
  form!: FormGroup;

  workEntry = {
    user_id: null,
    month: null,
    year: new Date().getFullYear(),
    hours_worked: null,
    hourly_rate: null
  };

  constructor(
    private timeManagementService: TimeManagementService,
    private fb: FormBuilder
  ) {
    this.timeManagementService.getUsers().subscribe(users => {
      this.users = users.map(user => user.name);
    });
  }

  ngOnInit() {
    this.form = this.fb.group({
      user: null,
      month: null,
      hours: null,
      year: new Date().getFullYear(),
      hourly_rate: null,
      total_hours: null
    })
  }

  entries: Array<{ user: string, month: string, hours: number }> = [];

  saveHoursWorked() {
    const newEntry = this.form.value;
    this.entries.push(newEntry);
    this.form.reset();

    const data = this.getDataToSave();
    this.timeManagementService.saveHoursWorked(data).subscribe();
  }

  getDataToSave(): any {
    const data = this.entries.map(entry => {
      return {
        user_id: this.users.indexOf(entry.user) + 1,
        month: this.months.find(month => month.name === entry.month)?.value,
        hours_worked: entry.hours
      }
    });
    return data;
  }

  months = [
    { name: 'Janeiro', value: 1 },
    { name: 'Fevereiro', value: 2 },
    { name: 'Março', value: 3 },
    { name: 'Abril', value: 4 },
    { name: 'Maio', value: 5 },
    { name: 'Junho', value: 6 },
    { name: 'Julho', value: 7 },
    { name: 'Agosto', value: 8 },
    { name: 'Setembro', value: 9 },
    { name: 'Outubro', value: 10 },
    { name: 'Novembro', value: 11 },
    { name: 'Dezembro', value: 12 }
  ];
}
