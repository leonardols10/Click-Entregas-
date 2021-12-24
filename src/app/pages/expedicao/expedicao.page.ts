import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { ToastController } from '@ionic/angular';
import { Post } from 'src/services/post';

@Component({
  selector: 'app-expedicao',
  templateUrl: './expedicao.page.html',
  styleUrls: ['./expedicao.page.scss'],
})
export class ExpedicaoPage implements OnInit {

  nome : string; 
  usuario : string;
  nivel : string;

  dadosLogin: any;
  entradas: string;
  saidas:string;
  total:number;

  constructor(private actRouter: ActivatedRoute, private router: Router, private provider: Post, private storage: NativeStorage, public toast: ToastController) { }

  ngOnInit() {
    this.storage.getItem('session_storage').then((res)=>{
      this.dadosLogin = res;
      this.nome = this.dadosLogin.nome;                 
      this.nivel = this.dadosLogin.nivel;
      this.usuario = this.dadosLogin.usuario;                 
    });
    this.carregar();

  }


  logout(){
    this.storage.clear();
    this.router.navigate(['/login']);
  }

  ionViewWillEnter(){
        this.storage.getItem('session_storage').then((res)=>{
      this.dadosLogin = res;
      this.nome = this.dadosLogin.nome;                 
      this.nivel = this.dadosLogin.nivel;
      this.usuario = this.dadosLogin.usuario;                 
    });
    this.carregar();
  }
  carregar(){
    return new Promise(resolve => {
      let dados = {
        requisicao : 'recuperar',
         
        };

        this.provider.dadosApi(dados, 'apiExpedicao.php').subscribe(data => {

        if(data['success']){
          this.entradas=data['result']['entradas'];
          this.saidas=data['result']['saidas'];
          this.total=data['result']['total'];

        }
        
                  
        });
    });

  }

}
