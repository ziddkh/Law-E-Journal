import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { EmptyComponentModule } from '../../components/empty-component/empty-component.module';
import { EmptyPageModule } from '../../components/empty-page/empty-page.module';
import { DialogModule } from '@angular/cdk/dialog'
const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
]

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    EmptyComponentModule,
    EmptyPageModule,
    DialogModule,
    RouterModule.forChild(routes)
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class HomeModule { }
