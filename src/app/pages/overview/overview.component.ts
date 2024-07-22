import { Component } from '@angular/core';
import { OverviewService } from './overview.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {
  totalHours: number = 0;
  totalEarned: number = 0;
  selectedMonth: string = '';
  summaryVisible: boolean = false;

  constructor(private overviewService: OverviewService) {}

  onMonthSelected() {
    this.totalHours = 0;
    this.totalEarned = 0;
    this.summaryVisible = false;
  }

  getWorkHoursSummary() {
    if (this.selectedMonth) {
      this.overviewService.getWorkHoursSummary(this.selectedMonth).subscribe(
        (data) => {
          this.totalHours = parseInt(data.total_hours, 10);
          this.totalEarned = parseFloat(data.total_earned);
          this.summaryVisible = true;
        },
        error => {
          console.error('Error fetching summary', error);
        }
      );
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
