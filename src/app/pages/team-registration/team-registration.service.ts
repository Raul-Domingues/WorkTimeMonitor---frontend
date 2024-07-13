import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeamRegistrationService {

  constructor(private http: HttpClient) { }

  userRegistration(name: string, birthdate: string, email: string) { 
    console.log('User registered successfully:', { name, birthdate, email });
    this.http.post('http://localhost:3001/cadastro', { name, birthdate, email })
    .subscribe(response => {
      console.log('User registered successfully:', response);
    }, error => {
      console.error('Error registering user:', error);
    });
  }
}
