import { ProdutoCarrinho } from './produtos';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  itens: ProdutoCarrinho[] = [];

  constructor() { }

  obterCarrinho(){
    const carrinho = JSON.parse(localStorage.getItem("carrinho") || ""); // convertendo pra JSON | se não tiver nada devolve uma string vazia
    return carrinho;
  }

  adicionarAoCarrinho(produto: ProdutoCarrinho){
    this.itens.push(produto);
    localStorage.setItem("carrinho", JSON.stringify(this.itens)); //convertendo objeto para string
  }

  limparCarrinho(){
    this.itens = [];
    localStorage.clear();
  }

}
