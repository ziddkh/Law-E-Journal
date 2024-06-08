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
    {
      path: 'tentang-kami',
      loadChildren: () => import('./pages/about-us/about-us.module').then(m => m.AboutUsModule)
    },
    {
      path: 'kontak-kami',
      loadChildren: () => import('./pages/contact-us/contact-us.module').then(m => m.ContactUsModule)
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
