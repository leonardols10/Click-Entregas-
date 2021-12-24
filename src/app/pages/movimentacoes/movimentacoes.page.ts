import { Post } from 'src/services/post';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movimentacoes',
  templateUrl: './movimentacoes.page.html',
  styleUrls: ['./movimentacoes.page.scss'],
})
export class MovimentacoesPage implements OnInit {

  lista : any = [];
  limit : number = 10;
  start : number = 0;
  
   
   dataBuscarInicial: Date;
   dataBuscarFinal: Date;

   total_entradas: string;
   total_saidas: string;
   total: number;

  constructor(
    private router: Router,  
    private provider: Post,
    
  ) { }

  ngOnInit() {
    this.carregar();

  }

 
  ionViewWillEnter(){
    this.lista = [];
    this.start = 0;
    this.carregar();
  }


  //atualizar o list view

  doRefresh(event) {
    
    setTimeout(() => {
      this.ionViewWillEnter();
      event.target.complete();
    }, 500);
  }


//barra de rolagem
loadData(event) {
  
    this.start += this.limit;

    setTimeout(() => {
      this.carregar().then(()=>{ 
        event.target.complete();
       });
     
    }, 500);
    
  
}


carregar(){
  return new Promise(resolve => {
    let dados = {
      requisicao : 'movimentacoes',
      limit : this.limit,
      start : this.start,
      dataInicial: this.dataBuscarInicial,
      dataFinal: this.dataBuscarFinal
     
    };
    this.provider.dadosApi(dados, 'apiExpedicao.php').subscribe(data => {

        this.total_entradas = data['total_entradas'];
        this.total_saidas = data['total_saidas'];
        this.total = data['total'];

      for(let dado of data['result']){
        
        this.lista.push(dado);
      }
      resolve(true);
    });

  });

}


}