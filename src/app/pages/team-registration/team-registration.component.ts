import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TeamRegistrationService } from './team-registration.service';
import { TpToastrService } from '../../shared/services/tp-toastr.service';
@Component({
  selector: 'app-team-registration',
  templateUrl: './team-registration.component.html',
  styleUrls: ['./team-registration.component.scss']
})
export class TeamRegistrationComponent implements OnInit {

  form!: FormGroup;

  constructor(
    private teamRegistrationService: TeamRegistrationService,
    private fb: FormBuilder,
    private tpToastrService: TpToastrService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [null, Validators.required],
      birthdate: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      hourly_rate: [null, [Validators.required, Validators.min(1)]]
    });
  }

  userRegistration(): void {
    if (!this.form.valid) {
      this.tpToastrService.error('Por favor, preencha todos os campos corretamente!');
      return;
    }
  
    try {
      this.teamRegistrationService.userRegistration(
        this.form.value.name, 
        this.form.value.birthdate, 
        this.form.value.email, 
        this.form.value.hourly_rate
      );
      this.tpToastrService.success('Usuário cadastrado com sucesso!');
    } catch (error) {
      console.log(error);
      this.tpToastrService.error('Erro ao cadastrar usuário!');
    }
  
    this.form.reset();
  }
  
}
