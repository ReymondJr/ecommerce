import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GalleryPage } from './gallery.page';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    component: GalleryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule],
})
export class GalleryPageRoutingModule {}
