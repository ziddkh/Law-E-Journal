import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery.component';
import { RouterModule, Routes } from '@angular/router';
import { LightgalleryModule } from 'lightgallery/angular';
import { EmptyPageModule } from '../../components/empty-page/empty-page.module';
import { ImageDialogModule } from '../../components/image-dialog/image-dialog.module';

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
    EmptyPageModule,
    ImageDialogModule,
    RouterModule.forChild(routes)
  ]
})
export class GalleryModule { }
