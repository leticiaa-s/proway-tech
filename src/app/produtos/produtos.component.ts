import { ActivatedRoute } from '@angular/router';
import { ProdutosService } from './../produtos.service';
import { Produto } from './../produtos';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  produtos?: Produto[];
  
  constructor(
    private produtoService: ProdutosService,
    private route: ActivatedRoute //captar os query parametros da rota
  ) { }

  ngOnInit(): void {
    
    const produtos = this.produtoService.getAll(); //obter todos os produtos para aplicar o filtro
    
    this.route.queryParamMap.subscribe(params => {  //pega os parametros da rota
      const descricao = params.get("descricao")?.toLowerCase(); //transformando o texto digitado na busca em lower case
      if (descricao){
        this.produtos = produtos.filter(produto => produto.descricao.toLowerCase().includes(descricao)); //determina se um array contém um determinado elemento
        return;
      }
      this.produtos = produtos;
    });
  }

}