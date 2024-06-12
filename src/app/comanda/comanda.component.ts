import { Component, OnInit } from '@angular/core';
import { ComandaService } from '../comanda.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comanda',
  templateUrl: './comanda.component.html',
  styleUrls: ['./comanda.component.css']
})
export class ComandaComponent implements OnInit {
  nomeCliente: string = '';
  telefoneCliente: string = '';
  numMesaCliente: string = '';

  constructor(public comandaService: ComandaService, private router: Router) { }

  ngOnInit(): void {
    this.nomeCliente = this.comandaService.getNomeCliente();
    this.telefoneCliente = this.comandaService.getTelefoneCliente();
    this.numMesaCliente = this.comandaService.getNumMesaCliente();
  }

  removerItem(index: number) {
    const itemRemovido = this.comandaService.itens[index];
    this.comandaService.removerItem(itemRemovido.nome, itemRemovido.preco);
  }

  enviarPedido() {
    this.router.navigate(['/cozinha'], {
      state: {
        itens: this.comandaService.itens,
        precoTotal: this.comandaService.precoTotal,
        nomeCliente: this.nomeCliente,
        telefoneCliente: this.telefoneCliente,
        numMesaCliente: this.numMesaCliente
      }
    });
  }
}
