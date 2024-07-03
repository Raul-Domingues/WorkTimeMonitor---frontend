import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-team-registration',
  templateUrl: './team-registration.component.html',
  styleUrl: './team-registration.component.scss'
})
export class TeamRegistrationComponent {

  form!:  FormGroup;

  cadastrar () {
    console.log(this.form.value);
  }

  get nome () {
    return this.form.get('nome');
  }

  get email () {
    return this.form.get('email');
  }

  get birthday () {
    return this.form.get('birthday');
  }
}
