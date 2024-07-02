import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TeamRegistrationComponent } from './pages/team-registration/team-registration.component';
import { TimeManagementComponent } from './pages/time-management/time-management.component';
import { OverviewComponent } from './pages/overview/overview.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'cadastro-membros',
    component: TeamRegistrationComponent
  },
  {
    path: 'gerenciamento-horas',
    component: TimeManagementComponent
  },
  {
    path: 'resumo',
    component: OverviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
