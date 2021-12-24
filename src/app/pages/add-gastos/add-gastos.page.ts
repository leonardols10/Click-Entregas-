import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/services/post';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-add-gastos',
  templateUrl: './add-gastos.page.html',
  styleUrls: ['./add-gastos.page.scss'],
})
export class AddGastosPage implements OnInit {

  dadosLogin:any;
  usuario:string;
  descricao:string;
  valor:string;
  vencimento:Date;

  constructor(private actRouter: ActivatedRoute, private router: Router, private provider: Post, private storage: NativeStorage, public toastController: ToastController) { }

  ngOnInit() {
    
  }
  ionViewWillEnter(){
    this.storage.getItem('session_storage').then((res)=>{
      this.dadosLogin = res;
      this.usuario = this.dadosLogin.usuario;                 
    });
  }

  async mensagemSalvar() {
    const toast = await this.toastController.create({
      message: 'Salvo com Sucesso!!',
      duration: 1000
    });
    toast.present();
  }

  Gastos(){
    this.router.navigate(['/gastos']);
  }

  cadastrar(){
    return new Promise(resolve => {
      
      let dados = {
        requisicao : 'add',
        descricao : this.descricao, 
        vencimento : this.vencimento, 
        usuario : this.usuario, 
        valor : this.valor, 
        };

        this.provider.dadosApi(dados, 'apiExpedicao.php').subscribe(data => {
          this.router.navigate(['/gastos']);
          this.mensagemSalvar();
        });
    });
  }

   

}
