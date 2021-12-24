import { ToastController } from '@ionic/angular';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Post } from 'src/services/post';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-motorista',
  templateUrl: './motorista.page.html',
  styleUrls: ['./motorista.page.scss'],
})
export class MotoristaPage implements OnInit {
  nome : string; 
  usuario : string;
  nivel : string;

  total_pendentes:string;
  total_hoje:string;
  total_aguardando:string;

  dadosLogin: any;



  constructor(private actRouter: ActivatedRoute, private router: Router, private provider: Post, private storage: NativeStorage, public toast: ToastController) { }

  ngOnInit() {
   /* this.actRouter.params.subscribe((data:any)=>{
      this.nome = data.nome;
      this.usuario = data.usuario;
      this.nivel = data.nivel;

    });*/
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
  entregas(usuario){  
    this.router.navigate(['/entregas/' + usuario ]);

  }
  ionViewWillEnter(){
    this.carregar();
  }
  carregar(){
    return new Promise(resolve => {
      let dados = {
        requisicao : 'recuperar',
        usuario : this.usuario, 
        };

        this.provider.dadosApi(dados, 'apiMotorista.php').subscribe(data => {

        if(data['success']){
          this.total_pendentes=data['result']['pendentes'];
          this.total_hoje=data['result']['hoje'];
          this.total_aguardando=data['result']['aguardando'];
        }
        
                  
        });
    });

  }
}
