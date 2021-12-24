import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'folder',
    loadChildren: () => import('./pages/folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'add-usuario',
    loadChildren: () => import('./pages/add-usuario/add-usuario.module').then( m => m.AddUsuarioPageModule)
  },
  {
    path: 'mostrar-usuario',
    loadChildren: () => import('./pages/mostrar-usuario/mostrar-usuario.module').then( m => m.MostrarUsuarioPageModule)
  },
  {
    path: 'usuarios',
    loadChildren: () => import('./pages/usuarios/usuarios.module').then( m => m.UsuariosPageModule)
  },

  {
  path: 'add-usuario/:id/:nome/:usuario/:senha/:nivel',
    loadChildren: () => import('./pages/add-usuario/add-usuario.module').then( m => m.AddUsuarioPageModule)
  },

  {
    path: 'mostrar-usuario/:id/:nome/:usuario/:senha/:nivel',
    loadChildren: () => import('./pages/mostrar-usuario/mostrar-usuario.module').then( m => m.MostrarUsuarioPageModule)
    },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'motorista',
    loadChildren: () => import('./pages/motorista/motorista.module').then( m => m.MotoristaPageModule)
  },
  {
    path: 'motorista/:nivel/:nome/:usuario',
    loadChildren: () => import('./pages/motorista/motorista.module').then( m => m.MotoristaPageModule)
  },
  {
    path: 'expedicao',
    loadChildren: () => import('./pages/expedicao/expedicao.module').then( m => m.ExpedicaoPageModule)
  },
  {
    path: 'folder/:nivel/:nome/:usuario',
    loadChildren: () => import('./pages/folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'expedicao/:nivel/:nome/:usuario',
    loadChildren: () => import('./pages/expedicao/expedicao.module').then( m => m.ExpedicaoPageModule)
  },
  {
    path: 'entregas',
    loadChildren: () => import('./pages/entregas/entregas.module').then( m => m.EntregasPageModule)
  },
  {
    path: 'entregas/:usuario',
    loadChildren: () => import('./pages/entregas/entregas.module').then( m => m.EntregasPageModule)
  },
  {
    path: 'gastos',
    loadChildren: () => import('./pages/gastos/gastos.module').then( m => m.GastosPageModule)
  },
  {
    path: 'movimentacoes',
    loadChildren: () => import('./pages/movimentacoes/movimentacoes.module').then( m => m.MovimentacoesPageModule)
  },
  {
    path: 'add-gastos',
    loadChildren: () => import('./pages/add-gastos/add-gastos.module').then( m => m.AddGastosPageModule)
  },
  


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
