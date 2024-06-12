// comanda.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComandaService {
  itens: { nome: string; preco: number; quantidade: number }[] = [];
  precoTotal: number = 0;
  nomeCliente: string = '';
  telefoneCliente: string = '';
  numMesaCliente: string = '';

  constructor() { }

  adicionarItem(item: { nome: string; preco: number }): void {
    const existingItem = this.itens.find(i => i.nome === item.nome);
    if (existingItem) {
      existingItem.quantidade += 1;
    } else {
      this.itens.push({ ...item, quantidade: 1 });
    }
    this.precoTotal += item.preco;
  }

  removerItem(nome: string, preco: number): void {
    const index = this.itens.findIndex(i => i.nome === nome);
    if (index !== -1) {
      const item = this.itens[index];
      if (item.quantidade > 1) {
        item.quantidade -= 1;
      } else {
        this.itens.splice(index, 1);
      }
      this.precoTotal -= preco;
    }
  }

  setClienteInfo(nome: string, telefone: string, numMesa: string): void {
    this.nomeCliente = nome;
    this.telefoneCliente = telefone;
    this.numMesaCliente = numMesa;
  }

  getNomeCliente(): string {
    return this.nomeCliente;
  }

  getTelefoneCliente(): string {
    return this.telefoneCliente;
  }

  getNumMesaCliente(): string {
    return this.numMesaCliente;
  }
}
