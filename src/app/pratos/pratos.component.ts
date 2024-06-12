import { Component, OnInit } from '@angular/core';
import { CardapioService } from '../cardapio.service'; // Importe o serviço

@Component({
  selector: 'app-pratos',
  templateUrl: './pratos.component.html',
  styleUrls: ['./pratos.component.css']
})
export class PratosComponent implements OnInit {
  pratos: { nome: string; descricao: string; preco: number }[] = [];

  constructor(private cardapioService: CardapioService) { }

  ngOnInit(): void {
    this.pratos = this.cardapioService.getPratos(); // Obtenha os pratos do serviço ao inicializar o componente
  }
}
