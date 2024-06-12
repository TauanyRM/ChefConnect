import { Component, OnInit } from '@angular/core';
import { CardapioService } from '../cardapio.service'; // Importe o serviço

@Component({
  selector: 'app-bebidas',
  templateUrl: './bebidas.component.html',
  styleUrls: ['./bebidas.component.css']
})
export class BebidasComponent implements OnInit {
  bebidas: { nome: string; descricao: string; preco: number }[] = [];

  constructor(private cardapioService: CardapioService) { }

  ngOnInit(): void {
    this.bebidas = this.cardapioService.getBebidas(); // Obtenha as bebidas do serviço ao inicializar o componente
  }
}
