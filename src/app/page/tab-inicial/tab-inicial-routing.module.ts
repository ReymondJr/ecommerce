import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabInicialPage } from './tab-inicial.page';

const routes: Routes = [
  {
    path: '',
    component: TabInicialPage,
    children: [
      {
        path: 'productos',
        loadChildren: () => import('../../page/productos/productos.module').then( m => m.ProductosPageModule)
      },
      {
        path: 'favorito',
        loadChildren: () => import('../../page/favorito/favorito.module').then( m => m.FavoritoPageModule)
      },
      {
        path: 'ofertas',
        loadChildren: () => import('../../page/oferta/oferta.module').then( m => m.OfertaPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabInicialPageRoutingModule {}
