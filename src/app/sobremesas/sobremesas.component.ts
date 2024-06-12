import { Component, OnInit } from '@angular/core';
import { CardapioService } from '../cardapio.service'; // Importe o serviço

@Component({
  selector: 'app-sobremesas',
  templateUrl: './sobremesas.component.html',
  styleUrls: ['./sobremesas.component.css']
})
export class SobremesasComponent implements OnInit {
  sobremesas: { nome: string; descricao: string; preco: number }[] = [];

  constructor(private cardapioService: CardapioService) { }

  ngOnInit(): void {
    this.sobremesas = this.cardapioService.getSobremesas(); // Obtenha as sobremesas do serviço ao inicializar o componente
  }
}
