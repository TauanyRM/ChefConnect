import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ComandaService {
  itens: { nome: string; preco: number }[] = []; // Array para armazenar os itens da comanda
  precoTotal: number = 0; // Variável para armazenar o preço total do pedido

  constructor(private router: Router) {}

  adicionarItem(item: { nome: string; preco: number }) {
    this.itens.push(item);
    this.precoTotal += item.preco;
  }

  removerItem(index: number) {
    const itemRemovido = this.itens[index];
    this.precoTotal -= itemRemovido.preco; // Subtrai o preço do item removido do preço total
    this.itens.splice(index, 1); // Remove o item da lista
  }

  enviarPedido() {
    // Navega para a tela da cozinha e passa os dados como parâmetros via state
    this.router.navigate(['/cozinha'], { state: { itens: this.itens, precoTotal: this.precoTotal } });
  }
}
