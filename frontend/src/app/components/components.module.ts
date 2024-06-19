import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { MenuModule } from "headlessui-angular";
import { PaginationComponent } from './pagination/pagination.component';
import { FloatingWhatsappComponent } from './floating-whatsapp/floating-whatsapp.component';
import { LoaderComponent } from './loader/loader.component';
import { EmptyPageComponent } from './empty-page/empty-page.component';
import { EmptyComponentComponent } from './empty-component/empty-component.component';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    PaginationComponent,
    FloatingWhatsappComponent,
    LoaderComponent,
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
    FloatingWhatsappComponent,
    LoaderComponent,
  ]
})
export class ComponentsModule { }
