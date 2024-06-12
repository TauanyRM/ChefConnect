// cozinha.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cozinha',
  templateUrl: './cozinha.component.html',
  styleUrls: ['./cozinha.component.css']
})
export class CozinhaComponent implements OnInit {
  itens: { nome: string; preco: number; quantidade: number }[] = [];
  precoTotal: number = 0;
  nomeCliente: string = '';
  telefoneCliente: string = '';
  numMesaCliente: string = '';

  constructor(private router: Router) {
    const state = this.router.getCurrentNavigation()?.extras.state;
    if (state) {
      this.itens = state['itens'] || [];
      this.precoTotal = state['precoTotal'] || 0;
      this.nomeCliente = state['nomeCliente'] || '';
      this.telefoneCliente = state['telefoneCliente'] || '';
      this.numMesaCliente = state['numMesaCliente'] || '';
    }
  }

  ngOnInit(): void {}
}
