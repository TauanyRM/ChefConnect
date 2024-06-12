// cardapio.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardapioService } from '../cardapio.service';
import { ComandaService } from '../comanda.service';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.css']
})
export class CardapioComponent implements OnInit {
  pratos: any[] = [];
  bebidas: any[] = [];
  drinks: any[] = [];
  sobremesas: any[] = [];
  nome: string = '';
  telefone: string = '';
  numMesa: string = '';
  selectedSabores: { [key: string]: string[] } = {};

  constructor(private route: ActivatedRoute, private cardapioService: CardapioService, private comandaService: ComandaService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.nome = params['nome'];
      this.telefone = params['telefone'];
      this.numMesa = params['numMesa'];
      this.comandaService.setClienteInfo(this.nome, this.telefone, this.numMesa);
    });

    this.pratos = this.cardapioService.getPratos();
    this.bebidas = this.cardapioService.getBebidas();
    this.drinks = this.cardapioService.getDrinks();
    this.sobremesas = this.cardapioService.getSobremesas();
  }

  onSaborChange(bebida: any, event: any): void {
    const sabor = event.target.value;
    if (event.target.checked) {
      if (!this.selectedSabores[bebida.nome]) {
        this.selectedSabores[bebida.nome] = [];
      }
      this.selectedSabores[bebida.nome].push(sabor);
    } else {
      this.selectedSabores[bebida.nome] = this.selectedSabores[bebida.nome].filter(s => s !== sabor);
    }
  }

  adicionarItem(item: any): void {
    const sabores = this.selectedSabores[item.nome] ? this.selectedSabores[item.nome].join(', ') : '';
    const itemNome = sabores ? `${item.nome} (${sabores})` : item.nome;
    this.comandaService.adicionarItem({ nome: itemNome, preco: item.preco });
  }
}
