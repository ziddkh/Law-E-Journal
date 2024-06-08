import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './article.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {
    path: '',
    component: ArticleComponent
  },
  {
    path: ':slug',
    component: ViewComponent,
  }
]

@NgModule({
  declarations: [
    ArticleComponent,
    ViewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ]
})
export class ArticleModule { }
