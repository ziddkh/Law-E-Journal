import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery.component';
import { RouterModule, Routes } from '@angular/router';
import { LightgalleryModule } from 'lightgallery/angular';

const routes: Routes = [
  {
    path: '',
    component: GalleryComponent,
  }
]

@NgModule({
  declarations: [
    GalleryComponent
  ],
  imports: [
    CommonModule,
    LightgalleryModule,
    RouterModule.forChild(routes)
  ]
})
export class GalleryModule { }
