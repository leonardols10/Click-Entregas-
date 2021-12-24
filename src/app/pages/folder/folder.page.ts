import { ToastController } from '@ionic/angular';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Post } from 'src/services/post';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {

  public parametro: string;

  
  nivel: string;
  nome: string;
  dadosLogin: any;
  usuario: string;

  motoristas:string;
  usuarios:string;
  entregas:string;
  receita:string;
  gastos:string;

  constructor(private actRouter: ActivatedRoute, private router: Router, private provider: Post, private storage: NativeStorage, public toast: ToastController) { }

  ngOnInit() {
    this.actRouter.params.subscribe((data:any)=>{
      this.nome = data.nome;
      this.usuario = data.usuario;
      this.nivel = data.nivel;
    });
    this.carregar();

  }

  ionViewWillEnter(){
    this.storage.getItem('session_storage').then((res)=>{
      this.dadosLogin = res;
      this.nome = this.dadosLogin.nome;                 
      this.nivel = this.dadosLogin.nivel;
    })
    this.carregar();

  }

  logout(){
    this.storage.clear();
    this.router.navigate(['/login']);
  }

  carregar(){
    return new Promise(resolve => {
      let dados = {
        requisicao : 'recuperar',
         
        };

        this.provider.dadosApi(dados, 'api.php').subscribe(data => {

        if(data['success']){
          this.motoristas=data['result']['motoristas'];
          this.usuarios=data['result']['usuarios'];
          this.entregas=data['result']['entregas'];
          this.receita=data['result']['receita'];
          this.gastos=data['result']['gastos'];

        }
        
                  
        });
    });

  }
}
