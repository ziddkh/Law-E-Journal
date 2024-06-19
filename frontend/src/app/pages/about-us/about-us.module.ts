import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './about-us.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { EmptyPageModule } from '../../components/empty-page/empty-page.module';

const routes: Routes = [
  {
    path: '',
    component: AboutUsComponent,
  }
]

@NgModule({
  declarations: [
    AboutUsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    EmptyPageModule,
    RouterModule.forChild(routes)
  ]
})
export class AboutUsModule { }
