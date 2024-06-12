import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(username: string, password: string): boolean {
    // Lógica de autenticação simulada
    return true;
  }

  logout(): void {
    // Lógica de logout simulada
  }

  isLoggedIn(): boolean {
    // Simulação de usuário não autenticado
    return false;
  }
}
