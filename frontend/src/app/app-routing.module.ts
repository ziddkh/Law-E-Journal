import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'artikel',
    loadChildren: () => import('./pages/article/article.module').then(m => m.ArticleModule)
  },
  {
    path: 'berita',
    loadChildren: () => import('./pages/news/news.module').then(m => m.NewsModule)
  },
  {
    path: 'media',
    loadChildren: () => import('./pages/news/news.module').then(m => m.NewsModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
