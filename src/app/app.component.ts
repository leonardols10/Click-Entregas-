import { NavigationEnd, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public Menu = [
    {
      title: 'Home',
      url: '/folder',
      icon: 'home'
    },
    {
      title: 'Usuários',
      url: '/usuarios',
      icon: 'people'
    },
    
  ];

  public MenuExpedicao = [
    {
      title: 'Home',
      url: '/expedicao',
      icon: 'home'
    },
    {
      title: 'Gastos', //mudar
      url: '/gastos',
      icon: 'card'
    },
    {
      title: 'Movimentações', //mudar
      url: '/movimentacoes',
      icon: 'cash'
    },
    
  ];

 
url : string;
urlsplit: any=[];
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router:Router
  ) {
    router.events.subscribe(event => {

      if (event instanceof NavigationEnd ) {
        this.url = event.url; 
        this.urlsplit =this.url.split("/");
        console.log(this.urlsplit);
      }
    });
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    }); 
  }

  ngOnInit() {
    
  }
}
