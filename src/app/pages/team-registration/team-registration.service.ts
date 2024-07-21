import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeamRegistrationService {

  constructor(private http: HttpClient) { }

  userRegistration(name: string, birthdate: string, email: string, hourly_rate: number) { 
    this.http.post('http://localhost:3001/cadastro', { name, birthdate, email, hourly_rate })
      .subscribe({
        next: response => {
          console.log('User registered successfully:', response);
        },
        error: error => {
          console.error('Error registering user:', error);
        }
      });
  }
}
