import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/services/post';

@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.page.html',
  styleUrls: ['./gastos.page.scss'],
})
export class GastosPage implements OnInit {
  dataBuscar : Date;
  lista : any = [];
  limit : number = 10;
  start : number = 0;
  descricao:string;
  valor:string;
  vencimento:Date;
  pagamento:Date;
  pago:string;
  funcionario:string;
  dadosLogin: any;
  usuario:string;

  constructor(private router: Router,  private provider: Post, private storage: NativeStorage) { }

  ngOnInit() {
    
    this.carregar();

  }
  ionViewWillEnter(){
    this.storage.getItem('session_storage').then((res)=>{
      this.dadosLogin = res;
      this.usuario = this.dadosLogin.usuario;                 
    });
    this.lista = [];
    this.start = 0;
    this.carregar();
  }
  addGastos(){
    this.router.navigate(['/add-gastos/']);
  }

  carregar(){
    return new Promise(resolve => {
      this.lista = [];
      let dados = {
        requisicao : 'listar',
        dataBuscar : this.dataBuscar, 
        limit : this.limit,
        start : this.start
        };

        this.provider.dadosApi(dados, 'apiExpedicao.php').subscribe(data => {

        if(data['result'] == '0') {
          this.ionViewWillEnter();
        }else{
          for(let dado of data['result']){
            this.lista.push(dado);
            
          }
        }
         
         resolve(true);
         
        });
    });
    
  }

  excluir(id){
    return new Promise(resolve => {
      
      let dados = {
        requisicao : 'excluir',
        id : id, 
        };

        this.provider.dadosApi(dados, 'apiExpedicao.php').subscribe(data => {
         this.ionViewWillEnter();
        });
    });
  }
  baixar(id){
    return new Promise(resolve => {
      
      let dados = {
        requisicao : 'baixar',
        id : id, 
        };

        this.provider.dadosApi(dados, 'apiExpedicao.php').subscribe(data => {
         this.ionViewWillEnter();
        });
    });
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


}
