import { Component, OnInit } from '@angular/core';
import { TimeManagementService } from './time-management.service';
import { User } from '../../models/user.interface';
@Component({
  selector: 'app-time-management',
  templateUrl: './time-management.component.html',
  styleUrl: './time-management.component.scss'
})
export class TimeManagementComponent implements OnInit {

  users: string[] = [];
  selectedUser: string = '';
  selectedMonth: number = 0;

  constructor(private timeManagementService: TimeManagementService) {}

  ngOnInit() {
    this.timeManagementService.getUsers().subscribe(users => {
      this.users = users.map(user => user.name);
    });
  }

  months = [
    { name: 'Janeiro', value: 1},
    { name: 'Fevereiro', value: 2},
    { name: 'Março', value: 3},
    { name: 'Abril', value: 4},
    { name: 'Maio', value: 5},
    { name: 'Junho', value: 6},
    { name: 'Julho', value: 7},
    { name: 'Agosto', value: 8},
    { name: 'Setembro', value: 9},
    { name: 'Outubro', value: 10},
    { name: 'Novembro', value: 11},
    { name: 'Dezembro', value: 12},
  ]
}
