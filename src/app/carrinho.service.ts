import { ProdutoCarrinho } from './produtos';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  itens: ProdutoCarrinho[] = [];

  constructor() { }

  obterCarrinho(){
    const carrinho = JSON.parse(localStorage.getItem("carrinho") || "[]"); // convertendo pra JSON | se não tiver nada devolve uma string vazia
    return carrinho;
  }

  adicionarAoCarrinho(produto: ProdutoCarrinho){
    this.itens.push(produto); //acrescenta um novo produto ao carrinho
    localStorage.setItem("carrinho", JSON.stringify(this.itens)); //salvando a lista de produtos no LocalStorage | convertendo objeto para string
  }

  removerProdutoCarrinho(produtoId: number){
    this.itens = this.itens.filter(item => item.id !== produtoId);
    localStorage.setItem("carrinho", JSON.stringify(this.itens)); //sobrescrevendo o LocalStorage quando um produto for removido
  }

  limparCarrinho(){
    this.itens = [];
    localStorage.clear();
  }

}
