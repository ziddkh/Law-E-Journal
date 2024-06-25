import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageDialogComponent } from './image-dialog.component';
import { DialogModule } from '@angular/cdk/dialog';



@NgModule({
  declarations: [
    ImageDialogComponent
  ],
  imports: [
    CommonModule,
    DialogModule,
  ],
  exports: [
    ImageDialogComponent
  ]
})
export class ImageDialogModule { }
