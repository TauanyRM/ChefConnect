import { Component, OnInit } from '@angular/core';
import { CardapioService } from '../cardapio.service'; // Importe o serviço

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.css']
})
export class DrinksComponent implements OnInit {
  drinks: { nome: string; descricao: string; preco: number }[] = [];

  constructor(private cardapioService: CardapioService) { }

  ngOnInit(): void {
    this.drinks = this.cardapioService.getDrinks(); // Obtenha os drinks do serviço ao inicializar o componente
  }
}
