import { Component, OnInit } from '@angular/core';
import { TimeManagementService } from './time-management.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TpToastrService } from '../../shared/services/tp-toastr.service';
import { User } from '../../models/user.interface';
@Component({
  selector: 'app-time-management',
  templateUrl: './time-management.component.html',
  styleUrl: './time-management.component.scss',
})
export class TimeManagementComponent implements OnInit {
  users: User[] = [];
  form!: FormGroup;

  constructor(
    private timeManagementService: TimeManagementService,
    private fb: FormBuilder,
    private tpToastrService: TpToastrService
  ) {}
  
  ngOnInit() {
    this.form = this.fb.group({
      user_id: null,
      month_year: null,
      hours_worked: null,
    });

    this.timeManagementService.getUsers().subscribe((users) => {
      this.users = users;
    });
  }

  saveHoursWorked() {
    if (this.form.valid) {
      const { user_id, month_year, hours_worked } = this.form.value;
      this.timeManagementService.saveHoursWorked(user_id, month_year, hours_worked).subscribe({
        next: () => {
          this.tpToastrService.success('Horas registradas com sucesso!');
          this.form.reset();
        },
        error: (error) => {
          console.error('Error saving hours worked:', error);
          this.tpToastrService.error('Erro ao registrar horas trabalhadas.');
        }
      });
    }
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
