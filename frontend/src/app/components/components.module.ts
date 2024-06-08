import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { MenuModule } from "headlessui-angular";
import { PaginationComponent } from './pagination/pagination.component';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    PaginationComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MenuModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    PaginationComponent,
  ]
})
export class ComponentsModule { }
