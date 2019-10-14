import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ExplorarPage } from './explorar.page';

const routes: Routes = [
  {
    path: '',
    component: ExplorarPage,
    children: [
      {
        path: 'peliculas',
        loadChildren: './pages/explorar/peliculas/peliculas.module#PeliculasPageModule'
         
      },
      {
        path: 'musica',
        loadChildren: './pages/explorar/musica/musica.module#MusicaPageModule'
      },
      {
        path: 'libros',
        loadChildren: './pages/explorar/libros/libros.module#LibrosPageModule'
      },
    ]
  },
  {
    path: '',
    redirectTo: 'peliculas',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ExplorarPage]
})
export class ExplorarPageModule {}
