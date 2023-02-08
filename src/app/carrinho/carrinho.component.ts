import { ProdutoCarrinho } from 'src/app/produtos';
import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from '../carrinho.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  itensCarrinho: ProdutoCarrinho[] = [];
  totalCompra = 0;

  constructor(public carrinhoService: CarrinhoService,
    private router: Router) { }

  ngOnInit(): void {
    this.itensCarrinho = this.carrinhoService.obterCarrinho();
    this.calculaTotal();
  }

  calculaTotal(){
    this.totalCompra = this.itensCarrinho.reduce((prev, curr) => prev + (curr.preco * curr.quantidade), 0);
    //reduce: prev - acumulador, cujo resultado final será retornado na última iteração
    //curr - valor do elemento atual (curr.preco, valor do produto * curr.quantidade, quantidade do produto no carrinho)
    //, 0 - valor inicial atribuído ao acumulador, que deve ser passado como argumento
  }

  removerProdutoCarrinho(produtoId: number){
    this.itensCarrinho = this.itensCarrinho.filter(item => item.id !== produtoId);
    this.carrinhoService.removerProdutoCarrinho(produtoId);
  }

  comprar(){
    alert("Parabéns! Você finalizou a sua compra!");
    this.carrinhoService.limparCarrinho();
    this.router.navigate(['produtos']);
  }
}
