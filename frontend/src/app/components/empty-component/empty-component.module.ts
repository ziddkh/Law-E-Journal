import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmptyComponentComponent } from './empty-component.component';


@NgModule({
  declarations: [
    EmptyComponentComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    EmptyComponentComponent,
  ]
})
export class EmptyComponentModule { }
