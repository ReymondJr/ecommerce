import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FavoritoPage } from './favorito.page';

const routes: Routes = [
  {
    path: '',
    component: FavoritoPage
  }
];

@NgModule({
 
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule],
})
export class FavoritoPageRoutingModule {}
