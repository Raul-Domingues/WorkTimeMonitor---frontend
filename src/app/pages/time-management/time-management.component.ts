import { Component, OnInit } from '@angular/core';
import { TimeManagementService } from './time-management.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TpToastrService } from '../../shared/services/tp-toastr.service';
@Component({
  selector: 'app-time-management',
  templateUrl: './time-management.component.html',
  styleUrl: './time-management.component.scss',
})
export class TimeManagementComponent implements OnInit {
  users: string[] = [];
  form!: FormGroup;

  constructor(
    private timeManagementService: TimeManagementService,
    private fb: FormBuilder,
    private tpToastrService: TpToastrService

  ) {
    this.timeManagementService.getUsers().subscribe((users) => {
      this.users = users.map((user) => user.name);
    });
  }

  ngOnInit() {
    this.form = this.fb.group({
      user_id: null,
      month_year: null,
      hours_worked: null,
    });
  }

  saveHoursWorked() {
    this.timeManagementService.saveHoursWorked(this.form.value.user_id, this.form.value.month_year, this.form.value.hours_worked);
    
    this.tpToastrService.success('Horas registradas com sucesso!');
    
    this.form.reset();
  }

  months = [
    { name: 'Janeiro', value: '01-2024' },
    { name: 'Fevereiro', value: '02-2024' },
    { name: 'Março', value: '03-2024' },
    { name: 'Abril', value: '04-2024' },
    { name: 'Maio', value: '05-2024' },
    { name: 'Maio', value: '05-2024' },
    { name: 'Junho', value: '06-2024' },
    { name: 'Julho', value: '07-2024' },
    { name: 'Agosto', value: '08-2024' },
    { name: 'Setembro', value: '09-2024' },
    { name: 'Outubro', value: '10-2024' },
    { name: 'Novembro', value: '11-2024' },
    { name: 'Dezembro', value: '12-2024' },
  ];
}
