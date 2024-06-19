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
import { EmptyPageModule } from '../../components/empty-page/empty-page.module';


const routes: Routes = [
  {
    path: '',
    component: PostsComponent
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
  },
  {
    path: ':type/:slug',
    component: ViewComponent
  },
]

@NgModule({
  declarations: [
    PostsComponent,
    ArticleComponent,
    MediaComponent,
    NewsComponent,
    ViewComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ComponentsModule,
    EmptyPageModule,
    RouterModule.forChild(routes),
  ]
})
export class PostsModule { }
