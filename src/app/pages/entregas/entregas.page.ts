import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Post } from 'src/services/post';

@Component({
  selector: 'app-entregas', 
  templateUrl: './entregas.page.html', 
  styleUrls: ['./entregas.page.scss'],
})
export class EntregasPage implements OnInit {

 
  usuario: string = "";
  
  dataBuscar : Date;
  lista : any = [];
  limit : number = 10;
  start : number = 0;

  constructor(private actRouter: ActivatedRoute, private router: Router, private provider: Post) { }

  ngOnInit() {
    this.actRouter.params.subscribe((data:any)=>{
     
      this.usuario = data.usuario;
     

    });
  }


  ionViewWillEnter(){
    this.lista = [];
    this.start = 0;
    this.carregar();
  }


  Motoristas(){
    this.router.navigate(['/motorista']);
  }


  carregar(){
    this.lista = [];
    console.log(this.dataBuscar);
    return new Promise(resolve => {
      let dados = {
        requisicao : 'listar',
        limit : this.limit,
        start : this.start,
        usuario : this.usuario,
        dataBuscar: this.dataBuscar,
       
      };
      this.provider.dadosApi(dados, 'apiMotorista.php').subscribe(data => {
        for(let dado of data['result']){
          this.lista.push(dado);
        }
        resolve(true);
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
