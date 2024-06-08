import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts.component';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from './article/article.component';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from '../../components/components.module';
import { MediaComponent } from './media/media.component';
import { ViewComponent } from './view/view.component';
import { NewsComponent } from './news/news.component';


const routes: Routes = [
  {
    path: '',
    component: PostsComponent
  },
  {
    path: ':type/:slug',
    component: ViewComponent
  },
  {
    path: 'artikel',
    component: ArticleComponent
  },
  {
    path: 'media',
    component: MediaComponent
  },
  {
    path: 'berita',
    component: NewsComponent
  }
]

@NgModule({
  declarations: [
    PostsComponent,
    ArticleComponent,
    MediaComponent,
    NewsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ComponentsModule,
    RouterModule.forChild(routes),
  ]
})
export class PostsModule { }
