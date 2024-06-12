// cardapio.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardapioService {
  private pratos: { nome: string; descricao: string; preco: number; imagem: string }[] = [
    { nome: 'Risoto de Camarão', descricao: 'Arroz arbóreo, camarão, creme de leite, queijo parmesão, champignon, cebola, vinho branco. 380g', preco: 41.89, imagem: 'assets/camarão.jpg' },
    { nome: 'Fettuccine', descricao: 'Macarrão fettuccine, creme de leite fresco,manteiga, queijo parmesão ralado. 200g', preco: 31.90, imagem: 'assets/fettuccine.jpg' },
    { nome: 'Filé Mignon ao Molho', descricao: 'Filé mignon, queijo parmesão, queijo provolone, creme de leite. 400g', preco: 79.0, imagem: 'assets/file_mignon.jpg' },
    // Adicione mais pratos conforme necessário
  ];

  private bebidas: { nome: string; descricao: string; preco: number; imagem: string; sabores?: string[] }[] = [
    { nome: 'Cerveja Artesanal', descricao: '600ml', preco: 7.99, imagem: 'assets/cervejas.jpg' },
    { nome: 'Sucos', descricao: 'Acerola, maracujá, abacaxi, goiaba', preco: 9.0, imagem: 'assets/sucos.jpg', sabores: ['Acerola', 'Maracujá', 'Abacaxi', 'Goiaba'] },
    { nome: 'Refrigerantes', descricao: 'Coca-cola, Guaraná, Fanta. 600ml.', preco: 12.0, imagem: 'assets/refrigerante.jpg', sabores: ['Coca-cola', 'Guaraná', 'Fanta'] },
    // Adicione mais bebidas conforme necessário
  ];

  private drinks: { nome: string; descricao: string; preco: number; imagem: string }[] = [
    { nome: 'Negroni', descricao: 'Coquetel feito de uma parte de gim, uma parte de vermute rosso, e uma parte de Campari, enfeitado com casca de laranja.', preco: 45.90, imagem: 'assets/negroni.jpg' },
    { nome: 'Manhattan', descricao: 'Coquetel feito com whisky, vermute doce e bitters.', preco: 39.0, imagem: 'assets/manhattan.jpg' },
    { nome: 'Cosmopolitan', descricao: 'Coquetel feito com vodka, triple sec, suco de oxicoco e suco de limão espremido ou adoçado.', preco: 37.40, imagem: 'assets/cosmopolitan.jpg' },
    // Adicione mais drinks conforme necessário
  ];

  private sobremesas: { nome: string; descricao: string; preco: number; imagem: string }[] = [
    { nome: 'Creme Brulée', descricao: 'Creme de leite, ovos, açúcar e baunilha, sua finalização é com uma cobertura dura de caramelo.', preco: 33.99, imagem: 'assets/cremebrulee.jpg' },
    { nome: 'Tiramisu', descricao: 'Biscoitos champanhe embebidos em café, queijo mascarpone, açúcar, ovos e polvilhada com cacau em pó.', preco: 32.90, imagem: 'assets/tiramisu-2.jpg' },
    { nome: 'Petit Gateau', descricao: 'Pequeno bolo de chocolate com casca e recheio cremoso acompanhado de sorvete.', preco: 30.0, imagem: 'assets/petigateau.jpg' },
    // Adicione mais sobremesas conforme necessário
  ];

  constructor() { }

  // Métodos para obter os itens do cardápio
  getPratos(): { nome: string; descricao: string; preco: number; imagem: string }[] {
    return this.pratos;
  }

  getBebidas(): { nome: string; descricao: string; preco: number; imagem: string; sabores?: string[] }[] {
    return this.bebidas;
  }

  getDrinks(): { nome: string; descricao: string; preco: number; imagem: string }[] {
    return this.drinks;
  }

  getSobremesas(): { nome: string; descricao: string; preco: number; imagem: string }[] {
    return this.sobremesas;
  }
}
